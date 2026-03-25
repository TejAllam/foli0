import fs from 'fs/promises';
import path from 'path';

// To pull the latest images, run this file using node in local dev mode 
// node scripts/fetch-previews.mjs ( It should update the images in public/projects folder )
async function fetchProjectPreview(url) {
  if (!url) return { screenshotUrl: null, description: null };
  let hostname = 'unknown';
  try {
    hostname = new URL(url).hostname.replace(/[^a-zA-Z0-9]/g, '-');
  } catch (e) {
    return { screenshotUrl: null, description: null };
  }

  try {
    const res = await fetch(`https://api.microlink.io/?url=${encodeURIComponent(url)}&screenshot=true&fullPage=true&viewport.width=1920&filter=screenshot,description`);
    if (!res.ok) throw new Error("Microlink non-200");
    const data = await res.json();
    const screenshot = data?.data?.screenshot?.url;
    const description = data?.data?.description;

    let localPath = null;
    if (screenshot) {
      const imgRes = await fetch(screenshot);
      if (imgRes.ok) {
        const buffer = await imgRes.arrayBuffer();
        await fs.writeFile(path.join(process.cwd(), 'public/projects', `${hostname}.png`), Buffer.from(buffer));
        localPath = `/projects/${hostname}.png`;
      }
    }
    return { screenshotUrl: localPath, description: description || null };
  } catch (error) {
    console.warn(`Failed Microlink for ${url}, fallback...`);
    try {
      const fallbackRes = await fetch(url, {
        headers: { "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) Chrome/120.0.0.0" }
      });
      if (fallbackRes.ok) {
        const html = await fallbackRes.text();
        const descMatch = html.match(/<meta[^>]*name=["']description["'][^>]*content=["']([^"']+)["'][^>]*>/i) ||
          html.match(/<meta[^>]*content=["']([^"']+)["'][^>]*name=["']description["'][^>]*>/i);
        if (descMatch && descMatch[1]) {
          return { screenshotUrl: null, description: descMatch[1].trim() };
        }
      }
    } catch (e) { }
    return { screenshotUrl: null, description: null };
  }
}

async function run() {
  const content = await fs.readFile(path.join(process.cwd(), 'app/projects/project-data.tsx'), 'utf-8');
  const urls = [...content.matchAll(/url:\s*["']([^"']+)["']/g)].map(m => m[1]).filter(u => u);

  const previews = {};
  for (const url of urls) {
    console.log(`Fetching ${url}...`);
    previews[url] = await fetchProjectPreview(url);
  }

  await fs.writeFile(path.join(process.cwd(), 'app/projects/previews.json'), JSON.stringify(previews, null, 2));
  console.log("Done. Saved to app/projects/previews.json");
}

run();
