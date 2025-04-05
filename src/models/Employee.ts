import EmployeeInterface from "./EmployeeInterface";
import ProjectInterface from "./ProjectInterface";


/* @note For future use */
export class Employee implements EmployeeInterface {
  public id: string;
  public summary: string | null;
  public birthDate: string;
  public email: string;
  public name: string;
  public position: string;
  public recrutementDate: string;
  public gender: string;
  public score: number;
  public team: string;
  public projects: ProjectInterface[]; 
}
