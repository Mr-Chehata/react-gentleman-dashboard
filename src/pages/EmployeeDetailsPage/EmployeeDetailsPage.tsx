import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styles from "./EmployeeDetailsPage.module.css";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import {
  fetchEmployeeById,
  getEmployeesStore,
} from "../../app/store/EmployeesSlice";
import { Fieldset } from "primereact/fieldset";
import { Divider } from "primereact/divider";

export function EmployeeDetailsPage() {
  const routerParams = useParams<{ employeeId: string }>();
  const employeesFetchState = useAppSelector(getEmployeesStore);
  const dispatch = useAppDispatch();

  /* useEffect(() => {
    if (routerParams.employeeId) {
      employeesService
        .getEmployeeById(routerParams.employeeId)
        .then((data) => setEmployee(data));
    }
  }, []); */
  useEffect(() => {
    if (routerParams.employeeId) {
      dispatch(fetchEmployeeById(routerParams.employeeId));
    }
  }, []);
  return employeesFetchState.status != "loading" &&
    employeesFetchState.employee ? (
    <div className="p-3 border-1 surface-border surface-card border-round mt-3">
      <div className="flex align-items-center gap-1">
        <span className="text-2xl text-900 font-bold">Name : </span>
        <span className="text-xl text-900">
          {employeesFetchState.employee?.name}
        </span>
      </div>
      <Divider />
      <div className="flex align-items-center gap-1">
        <span className="text-2xl text-900 font-bold">Email : </span>
        <span className="text-xl text-900">
          {employeesFetchState.employee?.email}
        </span>
      </div>
      <Divider />
      <div className="flex align-items-center gap-1">
        <span className="text-2xl text-900 font-bold">Position : </span>
        <span className="text-xl text-900">
          {employeesFetchState.employee?.position}
        </span>
      </div>
      <Divider />
      <div className="flex align-items-center gap-1">
        <span className="text-2xl text-900 font-bold">Team : </span>
        <span className="text-xl text-900">
          {employeesFetchState.employee?.team}
        </span>
      </div>
      <Divider />
      <div className="flex align-items-center gap-1">
        <span className="text-2xl text-900 font-bold">
          Seniority in the company :
        </span>
        <span className="text-xl text-900">
          {/*  {getYears(employeesFetchState.employee?.recrutementDate)} */}
        </span>
      </div>
      <Divider />
      <div className="flex align-items-center gap-1">
        <span className="text-2xl text-900 font-bold">Projects : </span>
        <ul className="text-xl text-900"></ul>
      </div>
    </div>
  ) : (
    <>{"none"}</>
  );
}
