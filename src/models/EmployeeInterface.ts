import ProjectInterface from "./ProjectInterface";

export default interface EmployeeInterface {
  id: string;
  birthDate: string;
  email: string;
  name: string;
  summary: string | null;
  position: string;
  projects: ProjectInterface[]; 
  recrutementDate: string;
  gender: string;
  score: number;
  team: string;
}
