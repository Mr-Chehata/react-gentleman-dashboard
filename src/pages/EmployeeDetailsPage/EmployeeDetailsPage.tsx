import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styles from "./EmployeeDetailsPage.module.css";
import { EmployeesService } from "../../services/EmployeesService";
import { EmployeeInterface } from "../../models/Employee";

export function EmployeeDetailsPage() {
  const routerParams = useParams<{ employeeId: string }>();
  const employeesService = new EmployeesService();
  const [employee, setEmployee] = useState<EmployeeInterface>();

  useEffect(() => {
    if (routerParams.employeeId) {
      employeesService
        .getEmployeeById(routerParams.employeeId)
        .then((data) => setEmployee(data));
    }
  }, []);

  return <>{employee?.name}</>;
}
