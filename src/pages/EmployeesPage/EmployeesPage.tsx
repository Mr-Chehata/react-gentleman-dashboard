import React, { useEffect } from "react";

import { EmployeesList } from "./EmployeesList/EmployeesList";
import { EmployeesStatistics } from "./EmployeesStatistics/EmployeesStatistics";

import styles from "./EmployeesPage.module.css";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import {
  fetchEmployees,
  getEmployeesStore,
} from "../../app/store/EmployeesStore";
import { Message } from "primereact/message";

export function EmployeesPage() {
  const employeesFetchState = useAppSelector(getEmployeesStore);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchEmployees());
  }, []);

  if (employeesFetchState.status === "failed") {
    return (
      <div className="card mt-4 p-4">
          <Message
            severity="error"
            text={employeesFetchState.status_message}
          ></Message>
      </div>
    );
  } else {
    return (
      <>
        <EmployeesStatistics
          status={employeesFetchState.status}
          status_message={employeesFetchState.status_message}
          employees={employeesFetchState.employees}
        ></EmployeesStatistics>
        <EmployeesList
          employees={employeesFetchState.employees}
          status={employeesFetchState.status}
          status_message={employeesFetchState.status_message}
        ></EmployeesList>
      </>
    );
  }
}
