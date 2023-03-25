import API from "../API";
import { Employee, EmployeeInterface } from "../models/Employee";

export class EmployeesService {
  employees: EmployeeInterface[];
  constructor() {
    this.employees = [];
  }

  getAllEmployees() {
    return API.get(`employees`).then((res) => {
      res.data.forEach((element: any) => {
        this.employees.push(element);
      });
      return Promise.resolve(this.employees);
    });
  }

  _getAllEmployees() {
    return new Promise<EmployeeInterface[]>((resolve) =>
      API.get(`employees`).then((res) => {
        res.data.forEach((element: any) => {
          this.employees.push(element);
        });
        
        setTimeout(() => resolve(this.employees), 2000)
      //  resolve(this.employees);
      })
    );
  }
}
