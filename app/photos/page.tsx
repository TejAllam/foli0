import React from "react";
import type { Metadata } from "next";
import { ImageGrid } from "app/components/image-grid";

export const metadata: Metadata = {
  title: "Photos 📸",
  description: "What's life without a few snaps",
};

export default function Photos() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-medium tracking-tight">Photos</h1>
      <ImageGrid
        columns={3}
        images={[
          {
            src: "/photos/photo1.jpg",
            alt: "Roman columns",
            href: "https://unsplash.com/photos/people-walking-near-building-during-daytime-dFLBDQQeffU?utm_content=creditShareLink&utm_medium=referral&utm_source=unsplash",
          },
          {
            src: "/photos/photo2.jpg",
            alt: "Big Ben",
            href: "https://unsplash.com/photos/big-ben-london-MdJq0zFUwrw?utm_content=creditShareLink&utm_medium=referral&utm_source=unsplash",
          },
          {
            src: "/photos/photo3.jpg",
            alt: "Sacré-Cœur Basilica",
            href: "https://unsplash.com/photos/a-view-of-the-inside-of-a-building-through-a-circular-window-Tp-3hrx88J4",
          },
          {
            src: "/photos/photo4.jpg",
            alt: "Eiffel Tower",
            href: "https://unsplash.com/photos/the-eiffel-tower-towering-over-the-city-of-paris-OgPuPvPsHLM?utm_content=creditShareLink&utm_medium=referral&utm_source=unsplash",
          },
          {
            src: "/photos/photo13.jpg",
            alt: "Somewhere in Zurich",
            href: "#",
          },
          {
            src: "/photos/photo18.jpg",
            alt: "Amsterdam",
            href: "#",
          },
        ]}
      />

      <ImageGrid
        columns={2}
        images={[
          { src: "/photos/photo7.jpg", alt: "" },
          { src: "/photos/photo8.jpg", alt: "" },
          { src: "/photos/photo9.jpg", alt: "" },
          { src: "/photos/photo10.jpg", alt: "" },
        ]}
      />

      <ImageGrid
        columns={4}
        images={[
          { src: "/photos/photo11.jpg", alt: "" },
          { src: "/photos/photo12.jpg", alt: "" },
          { src: "/photos/photo13.jpg", alt: "" },
          { src: "/photos/photo14.jpg", alt: "" },
          { src: "/photos/photo15.jpg", alt: "" },
          { src: "/photos/photo16.jpg", alt: "" },
        ]}
      />
    </section>
  );
}
