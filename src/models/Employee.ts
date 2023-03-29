import { ProjectInterface } from "./Project";

export interface EmployeeInterface {
  id: number;
  birthDate: string;
  email: string;
  name: string;
  position: string;
  projects: string[];
  recrutementDate: string;
  gender: string;
  score: number;
  team: string;
  projectsObjects: ProjectInterface[];
}

/* @note For future use */
export class Employee implements EmployeeInterface {
  public id: number;
  public birthDate: string;
  public email: string;
  public name: string;
  public position: string;
  public projects: string[];
  public recrutementDate: string;
  public gender: string;
  public score: number;
  public team: string;
  projectsObjects: ProjectInterface[];
}
