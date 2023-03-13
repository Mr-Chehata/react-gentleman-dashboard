import Project from "./ProjectInterface";

export default interface Employee {
  id: number;
  birthDate: string;
  email: string;
  name: string;
  position: string;
  projects: Project[];
  recrutementDate: string;
  gender: string;
  score: number;
  team: string;
}
