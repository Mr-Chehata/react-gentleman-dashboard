import ProjectInterface from "./ProjectInterface";

export class Project implements ProjectInterface {
  id: string;
  name: string;
  repo: string;
}
