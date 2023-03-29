export interface ProjectInterface {
  id: string;
  name: string;
  repo: string;
}


/* @note For future use */
export class Project implements ProjectInterface{
  id: string;
  name: string;
  repo: string;
}
