export interface Project {
  title: string;
  year: number;
  description: string;
  url: string;
}

export const projects: Project[] = [
  {
    title: "IDCF",
    year: 2024,
    description: "Internet Data Collection Facility at the Bureau of Labor Statistics",
    url: "https://idcf.bls.gov",
  },
  {
    title: "Data Finder",
    year: 2023,
    description: "Data Finder",
    url: "https://data.bls.gov/dataQuery/",
  },
  {
    title: "Data Viewer",
    year: 2023,
    description: "Open source AI education resources",
    url: "https://data.bls.gov/dataViewer/",
  },
  {
    title: "PDQ Web",
    year: 2023,
    description: "Data Query Single Screen",
    url: "https://data.bls.gov/PDQWeb/",
  }, 
];
