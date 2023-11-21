export enum SelectedPage {
  AboutMe = "aboutme",
  Skills = "skills",
  Projects = "projects",
  Footer = "footer",
}
export interface SkillType {
  icon: JSX.Element;
  title: string;
}

export interface ProjectType {
  name: string;
  description?: string;
  link?: string;
  image: string;
}
