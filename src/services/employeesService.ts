import API from "../API";
import EmployeeInterface from "../Models/EmployeeInterface";

import { ProjectsService } from "./ProjectsService";


export class EmployeesService {
  private projectsService: ProjectsService;
  private employees: EmployeeInterface[];
  
  constructor() {
    this.employees = [];
    this.projectsService = new ProjectsService();
  }

  getEmployees(): Promise<EmployeeInterface[]> {
    this.employees = [];
    return new Promise<EmployeeInterface[]>((resolve, reject) =>
      API.get(`employees`)
        .then((res) => {
          res.data.forEach((employee: EmployeeInterface) => {
            this.employees.push(employee);
          });
          //@note: Only to see async loading and show Skeleton loader...
          setTimeout(() => resolve(this.employees), 2000);
        })
        .catch((error) => {
          console.log(error)
          reject(new Error(error));
        })
    );
  }

  getEmployeeById(id: string): Promise<EmployeeInterface> {
    return new Promise<EmployeeInterface>((resolve, reject) =>
      API.get(`employees/${id}`).then((res) => {
        //@note: Only to see async loading and show skeleton loader...
        setTimeout(() => resolve(res.data), 2000);
      }).catch((error) => {
        console.log(error)
        reject(new Error(error));
      })
    );
  }

  async getEmployeeWithProjects(id: string): Promise<EmployeeInterface | null> {
    try {
     
      const employee = await this.getEmployeeById(id);

      if (!employee) {
        return null;
      }

   
      if (employee.projects.length > 0) {
        employee.projects = await Promise.all(
          employee.projects.map(async (projectId: number) => {
            return await this.projectsService.getProjectById(projectId.toString());
          })
        );
      }

      return employee;
    } catch (error) {
      console.error(`Error fetching employee with projects: ${error}`);
      throw error;
    }
  }
}

