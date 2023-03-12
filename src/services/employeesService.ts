export default class EmployeesService {
  employee: any /* NodeInterface[] */;
  constructor() {
    this.employee = [];
  }

  getEmployees(): any[] {
    return this.employee;
  }
}
