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
    title: "ARS",
    year: 2016,
    description: "Annual Refiling Survey",
    url: "https://idcfars.bls.gov/ARS/",
  },
  {
    title: "CES Lite",
    year: 2016,
    description: "Current Employment Statistics - Lite Version",
    url: "https://cesdata.bls.gov/CESLite",
  },
  {
    title: "OEWS",
    year: 2014,
    description: "Occupational Employment and Wage Statistics",
    url: "https://idcfoews.bls.gov/OEWSLite",
  },
  {
    title: "JOLTS",
    year: 2017,
    description: "Job Opening and Labor Turover Survey",
    url: "https://joltsdata.bls.gov/JOLTS",
  },
  {
    title: "PDQ Web",
    year: 2018,
    description: "Data Query Single Screen.",
    url: "https://data.bls.gov/PDQWeb/",
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
    title: "Data Glove",
    year: 2008,
    description: "Final year School project to relay hand gestures to speech ",
    url: "",
  }, 
];
