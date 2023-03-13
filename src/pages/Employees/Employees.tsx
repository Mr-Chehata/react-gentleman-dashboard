import React, { useState } from "react";

import { EmployeesList } from "./EmployeesLists/EmployeesList";
import { EmployeesStatistics } from "./EmployeesStatistics/EmployeesStatistics";

import styles from "./Employees.module.css";

export function Employees() {
  const [incrementAmount, setIncrementAmount] = useState("2");

  const incrementValue = Number(incrementAmount) || 0;

  return (
    <div>
      <EmployeesStatistics></EmployeesStatistics>
      <EmployeesList></EmployeesList>
    </div>
  );
}
