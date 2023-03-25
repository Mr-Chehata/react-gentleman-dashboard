import React, { useState, useEffect } from "react";

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

  return <>details</>;
}
