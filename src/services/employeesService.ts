import API from "../API";
import { EmployeeInterface } from "../models/Employee";

export class EmployeesService {
  employees: EmployeeInterface[];
  constructor() {
    this.employees = [];
  }

  getEmployees(): Promise<EmployeeInterface[]> {
    return new Promise<EmployeeInterface[]>((resolve) =>
      API.get(`employees`).then((res) => {
        res.data.forEach((element: any) => {
          this.employees.push(element);
        });

        //@note: Only to see async loading and show skelton loader...
        setTimeout(() => resolve(this.employees), 2000);
      })
    );
  }

  getEmployeeById(id: string): Promise<EmployeeInterface> {
    return new Promise<EmployeeInterface>((resolve) =>
      API.get(`employees/${id}`).then((res) => {
        //@note: Only to see async loading and show skelton loader...
        setTimeout(() => resolve(res.data), 2000);
      })
    );
  }
}
