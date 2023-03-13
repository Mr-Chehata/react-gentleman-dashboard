import ProjectInterface from "./ProjectInterface";

export default class Employee {
  private id: number;
  private birthDate: string;
  private email: string;
  private name: string;
  private position: string;
  private projects: ProjectInterface[];
  private recrutementDate: string;
  private gender: string;
  private score: number;
  private team: string;
}
