import React, { useState, useEffect } from "react";

import { EmployeesList } from "./EmployeesList/EmployeesList";
import { EmployeesStatistics } from "./EmployeesStatistics/EmployeesStatistics";

import styles from "./EmployeesPage.module.css";
import { EmployeesService } from "../../services/EmployeesService";
import { EmployeeInterface } from "../../models/Employee";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { fetchEmployees, getEmployeesStore } from "../../app/store/EmployeesSlice";

export function EmployeesPage() {
  const employeesFetchState = useAppSelector(getEmployeesStore);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchEmployees());
  }, []);

  return (
    <>
      <EmployeesStatistics
        employees={employeesFetchState.emloyees}
      ></EmployeesStatistics>
      <EmployeesList employees={employeesFetchState.emloyees} isLoading={employeesFetchState.status == "loading"} ></EmployeesList>
    </>
  );
}
