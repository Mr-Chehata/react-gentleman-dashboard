import API from "../API";
import { ProjectInterface } from "../Models/Project";

export class ProjectsService {
  getProjectById(id: string): Promise<ProjectInterface> {
    return new Promise<ProjectInterface>((resolve) =>
      API.get(`projects/${id}`).then((res) => {
        resolve(res.data);
      })
    );
  }
}
