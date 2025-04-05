import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Message } from "primereact/message";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import {
  fetchEmployeeById,
  getEmployeesStore,
} from "../../app/store/EmployeesStore";
import { Card } from "primereact/card";
import { Skeleton } from "primereact/skeleton";
import { Chip } from "primereact/chip";
import { Button } from "primereact/button";

import DateHelper from "../../Helpers/DateHelper";
import styles from "./EmployeeDetailsPage.module.css";

export function EmployeeDetailsPage() {
  const routerParams = useParams<{ employeeId: string }>();
  const navigate = useNavigate();
  const employeesFetchState = useAppSelector(getEmployeesStore);
  const dispatch = useAppDispatch();

  function handleBackClick() {
    navigate("/employees");
  }

  useEffect(() => {
    if (routerParams.employeeId) {
      dispatch(fetchEmployeeById(routerParams.employeeId));
    }
  }, []);
  if (employeesFetchState.status === "loading") {
    return (
      <div className="mt-4">
        <Button
          label="Back"
          icon="pi pi-arrow-left"
          className="p-button-outlined p-button-text p-button-plain mb-3"
          onClick={handleBackClick}
        />
        <div className="field  p-3 mt-3">
          <Skeleton className="mb-2"></Skeleton>
          <Skeleton width="10rem" className="mb-2"></Skeleton>
          <Skeleton width="5rem" className="mb-2"></Skeleton>
          <Skeleton height="2rem" className="mb-2"></Skeleton>
          <Skeleton width="10rem" height="4rem"></Skeleton>
        </div>
      </div>
    );
  } else if (employeesFetchState.status === "failed") {
    return (
      <div className="mt-4">
        <Button
          label="Back"
          icon="pi pi-arrow-left"
          className="p-button-outlined p-button-text p-button-plain mb-3"
          onClick={handleBackClick}
        />
        <div className="card mt-4 p-4">
          <Message
            severity="error"
            text={employeesFetchState.status_message}
          ></Message>
        </div>
      </div>
    );
  } else {
    return (
      <div className="text-500 mt-4">
        <Button
          label="Back"
          icon="pi pi-arrow-left"
          className="p-button-outlined p-button-text p-button-plain mb-3"
          onClick={handleBackClick}
        />
        <Card
          title={employeesFetchState.employee?.name}
          className="p-4 surface-border surface-card border-round "
        >
          <div className="text-500 mb-5">
          {employeesFetchState.employee?.summary}
          </div>
          <ul className="list-none p-0 m-0">
            <li className="flex align-items-center py-3 px-2  border-300 flex-wrap">
              <div className="text-500 w-6 md:w-2 font-medium">Name</div>
              <div className="text-900 w-full md:w-8 md:flex-order-0 flex-order-1">
                {employeesFetchState.employee?.name}
              </div>
              <div className="w-6 md:w-2 flex justify-content-end">
                <i className="pi pi-user text-500 w-6 md:w-2 font-medium text-2xl "></i>
              </div>
            </li>
            <li className="flex align-items-center py-3 px-2  border-300 flex-wrap">
              <div className="text-500 w-6 md:w-2 font-medium">Email</div>
              <div className="text-900 w-full md:w-8 md:flex-order-0 flex-order-1">
                {employeesFetchState.employee?.email}
              </div>
              <div className="w-6 md:w-2 flex justify-content-end">
                <i className="pi pi-envelope text-500 w-6 md:w-2 font-medium text-2xl "></i>
              </div>
            </li>
            <li className="flex align-items-center py-3 px-2  border-300 flex-wrap">
              <div className="text-500 w-6 md:w-2 font-medium">Position</div>
              <div className="text-900 w-full md:w-8 md:flex-order-0 flex-order-1">
                {employeesFetchState.employee?.position}
              </div>
              <div className="w-6 md:w-2 flex justify-content-end">
                <i className="pi pi-briefcase text-500 w-6 md:w-2 font-medium text-2xl "></i>
              </div>
            </li>

            <li className="flex align-items-center py-3 px-2  border-300 flex-wrap">
              <div className="text-500 w-6 md:w-2 font-medium">Experience</div>
              <div className="text-900 w-full md:w-8 md:flex-order-0 flex-order-1">
                {(employeesFetchState?.employee?.recrutementDate
                  ? DateHelper.getYearsNumber(
                      employeesFetchState?.employee?.recrutementDate
                    )
                  : "") + " "}
                 years
              </div>
              <div className="w-6 md:w-2 flex justify-content-end">
                <i className="pi pi-calendar text-500 w-6 md:w-2 font-medium text-2xl "></i>
              </div>
            </li>
            <li className="flex align-items-center py-3 px-2  border-300 flex-wrap">
              <div className="text-500 w-6 md:w-2 font-medium">Team</div>
              <div className="text-900 w-full md:w-8 md:flex-order-0 flex-order-1">
                {employeesFetchState.employee?.team}
              </div>
              <div className="w-6 md:w-2 flex justify-content-end">
                <i className="pi pi-users text-500 w-6 md:w-2 font-medium text-2xl "></i>
              </div>
            </li>
            <li className="flex align-items-center py-3 px-2 border-300 flex-wrap">
              <div className="text-500 w-6 md:w-2 font-medium">Projects </div>
              <div className="text-900 w-full md:w-8 md:flex-order-0 flex-order-1">
                {employeesFetchState.employee?.projects?.map(
                  (project, i) => {
                    return (
                      <Chip
                        label={project.name}
                        key={project.id}
                        icon="pi pi-github"
                        className="mr-2"
                      />
                    );
                  }
                )}
              </div>
              <div className="w-6 md:w-2 flex justify-content-end">
                <i className="pi pi-th-large text-500 w-6 md:w-2 font-medium text-2xl "></i>
              </div>
            </li>
          </ul>
        </Card>
      </div>
    );
  }
}
