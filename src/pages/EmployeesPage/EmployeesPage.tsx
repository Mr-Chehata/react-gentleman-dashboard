import React, { useState, useEffect } from "react";

import { EmployeesList } from "./EmployeesList/EmployeesList";
import { EmployeesStatistics } from "./EmployeesStatistics/EmployeesStatistics";

import styles from "./EmployeesPage.module.css";
import { EmployeesService } from "../../services/EmployeesService";
import { EmployeeInterface } from "../../models/Employee";

export function EmployeesPage() {
  const employeesService = new EmployeesService();
  const [employees, setEmployees] = useState<EmployeeInterface[]>([]);

  useEffect(() => {
    employeesService
      ._getAllEmployees()
      .then((data) => setEmployees(data.slice(0, 12)));
  }, []);

  return (
    <>
      <EmployeesStatistics employees={employees}></EmployeesStatistics>
      <EmployeesList employees={employees}></EmployeesList>
    </>
  );
}
