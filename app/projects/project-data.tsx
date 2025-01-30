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
    year: 2014,
    description: "Data Finder",
    url: "https://data.bls.gov/dataQuery/",
  },
  {
    title: "Data Viewer",
    year: 2014,
    description: "Composite dispay of suvey data on a single screen.",
    url: "https://data.bls.gov/dataViewer/",
  },
  {
    title: "PDQ Web",
    year: 2018,
    description: "Data Query Single Screen.",
    url: "https://data.bls.gov/PDQWeb/",
  }, 
  {
    title: "Data Glove",
    year: 2008,
    description: "Final year School project to relay hand gestures to speech ",
    url: "",
  }, 
];
