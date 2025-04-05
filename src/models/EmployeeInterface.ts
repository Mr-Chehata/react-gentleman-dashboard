import ProjectInterface from "./ProjectInterface";

export default interface EmployeeInterface<T = ProjectInterface[]> {
  id: string;
  birthDate: string;
  email: string;
  name: string;
  summary: string | null;
  position: string;
  projects: T; 
  recrutementDate: string;
  gender: string;
  score: number;
  team: string;
}


export type EmployeeRawInterface = EmployeeInterface<number[]>;