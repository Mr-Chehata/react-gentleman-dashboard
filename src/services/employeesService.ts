import API from "../API";
import { EmployeeInterface } from "../models/Employee";
import { ProjectsService } from "./ProjectsService";

export class EmployeesService {
  employees: EmployeeInterface[];
  constructor() {
    this.employees = [];
  }

  getEmployees(): Promise<EmployeeInterface[]> {
    this.employees = [];
    return new Promise<EmployeeInterface[]>((resolve,reject) =>
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
    return new Promise<EmployeeInterface>((resolve,reject) =>
      API.get(`employees/${id}`).then((res) => {
        //@note: Only to see async loading and show skeleton loader...
        setTimeout(() => resolve(res.data), 2000);
      }).catch((error) => {
        console.log(error)
        reject(new Error(error));
      })
    );
  }

  async getEmployeeWithProject(id: string) {
    let employee = await this.getEmployeeById(id);
    if (employee) {
      let projectsService = new ProjectsService();
      try {
        employee.projectsObjects = await Promise.all(
          employee.projects.map((item) => projectsService.getProjectById(item))
        );
      } catch (err) {}
    }

    return employee;
  }
}
