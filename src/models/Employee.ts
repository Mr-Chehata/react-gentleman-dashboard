import { ProjectInterface } from "./Project";

export interface EmployeeInterface {
  id: number;
  birthDate: string;
  email: string;
  name: string;
  position: string;
  projects: ProjectInterface[];
  recrutementDate: string;
  gender: string;
  score: number;
  team: string;
}

export class Employee implements EmployeeInterface {
  public id: number;
  public birthDate: string;
  public email: string;
  public name: string;
  public position: string;
  public projects: ProjectInterface[];
  public recrutementDate: string;
  public gender: string;
  public score: number;
  public team: string;
}
