export type Project = {
  _id?: string;
  name: string;
  techs: string[];
  description: string;
  image: string;
  features: string[];
  liveLink: string;
  githubLink: string;
  [key: string]: any;
};
