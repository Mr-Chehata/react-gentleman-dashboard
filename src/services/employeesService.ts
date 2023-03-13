import API from "../API";
import EmployeeInterface from "../models/EmployeeInterface";

export class EmployeesService {
  // employees: EmployeeInterface[];
  employees: any[];
  constructor() {
    this.employees = [];
  }

  getAllEmployees() {
    return API.get(`employees`).then((res) => {
      res.data.forEach((element: any) => {
        this.employees.push(element);
      });
      Promise.resolve(this.employees);
    });

    /*   .then(res => {
        console.log(res);
        console.log(res.data);
      })); */
  }
}
