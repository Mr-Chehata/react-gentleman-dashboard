import { useMemo } from "react";
import { Avatar } from "primereact/avatar";
import { AvatarGroup } from "primereact/avatargroup";

import styles from "./EmployeesStatistics.module.css";
import DateHelper from "../../../Helpers/DateHelper";
import { Skeleton } from "primereact/skeleton";
import EmployeeInterface from "../../../Models/EmployeeInterface";

export function EmployeesStatistics({
  status = "",
  status_message = null,
  employees = [],
}: {
  status: string;
  status_message: string | null;
  employees: EmployeeInterface[];
}) {
  const numberOfEmployees = useMemo(() => {
    return employees.length;
  }, [employees]);

  const numberOfFemale = useMemo(() => {
    return employees.reduce((prevEmp, currentEmp) => {
      return currentEmp.gender.toLocaleLowerCase() === "female"
        ? prevEmp + 1
        : prevEmp;
    }, 0);
  }, [employees]);

  const numberOfMale = useMemo(() => {
    return employees.reduce((prevEmp, currentEmp) => {
      return currentEmp.gender.toLocaleLowerCase() === "male"
        ? prevEmp + 1
        : prevEmp;
    }, 0);
  }, [employees]);

  const numberOfTeams = useMemo(() => {
    let teams: string[] = [];
    employees.forEach((item) => {
      if (teams.indexOf(item.team) === -1) {
        teams.push(item.team);
      }
    });

    return teams.length;
  }, [employees]);

  const bestEmployee: EmployeeInterface | null = useMemo(() => {
    return employees.reduce((prevEmp, currentEmp) => {
      return currentEmp.score > prevEmp.score ? currentEmp : prevEmp;
    }, employees[0]);
  }, [employees]);

  const lastEmployee: EmployeeInterface | null = useMemo(() => {
    return employees.reduce((prevEmp, currentEmp) => {
      return DateHelper.compareDates(
        currentEmp.recrutementDate,
        prevEmp.recrutementDate
      )
        ? currentEmp
        : prevEmp;
    }, employees[0]);
  }, [employees]);

  if (status === "loading") {
    /* Loading status  */
    return (
      <div className="card mt-3 mb-4">
        <div className="p-grid grid ">
          {(() => {
            let td = [];
            for (let i = 1; i <= 6; i++) {
              td.push(
                <div key={i}
                  className={
                    "col-12 md:col-6 lg:col-4 mb-2 " + styles.statsCard
                  }
                >
                  <div className=" p-4">
                    <Skeleton className="mb-2" height="6rem"></Skeleton>
                    <Skeleton className="mb-2" height="6rem"></Skeleton>
                  </div>
                </div>
              );
            }
            return td;
          })()}
        </div>
      </div>
    );
  } else {
    return (
      <>
        <div className="card grid mt-3 mb-3">
          <div className={"col-12 md:col-6 lg:col-4 " + styles.statsCard}>
            <div className=" shadow-2 p-3 border-1 border-50 border-round h-100">
              <div className="flex justify-content-between ">
                <div>
                  <span className="block text-500 font-medium">Employees</span>
                  <div className="text-900 font-medium text-4xl mb-1">
                    {numberOfEmployees ?? "loading"}
                  </div>
                </div>
                <div>
                  <i className="pi pi-users text-4xl text-500 font-medium"></i>
                </div>
              </div>
            </div>
          </div>
          <div className={"col-12 md:col-6 lg:col-4 " + styles.statsCard}>
            <div className=" shadow-2 p-3 border-1 border-50 border-round">
              <div className="flex justify-content-between ">
                <div>
                  <span className="block text-500 font-medium ">
                    Male employees
                  </span>
                  <div className="text-900 font-medium text-4xl mb-1">
                    {numberOfMale ?? "loading"}
                  </div>
                </div>
                <div>
                  <i className="pi pi-user text-4xl text-500 font-medium"></i>
                </div>
              </div>
            </div>
          </div>

          <div className={"col-12 md:col-6 lg:col-4 " + styles.statsCard}>
            <div className=" shadow-2 p-3 border-1 border-50 border-round">
              <div className="flex justify-content-between ">
                <div>
                  <span className="block text-500 font-medium ">
                    Last hired employee
                  </span>
                  <div className="text-900 font-medium text-2xl mb-1">
                    {lastEmployee?.name ?? "loading"}
                  </div>
                </div>
                <div>
                  <i className="pi pi-calendar-times   text-4xl text-500 font-medium"></i>
                </div>
              </div>
            </div>
          </div>
          <div className={"col-12 md:col-6 lg:col-4 " + styles.statsCard}>
            <div className=" shadow-2 p-3 border-1 border-50 border-round">
              <div className="flex justify-content-between ">
                <div>
                  <span className="block text-500 font-medium ">Teams</span>
                  <div className="text-900 font-medium text-4xl mb-1">
                    {numberOfTeams ?? "loading"}
                  </div>
                </div>
                <div>
                  <i className="pi pi-th-large text-4xl text-500 font-medium "></i>
                </div>
              </div>
            </div>
          </div>
          <div className={"col-12 md:col-6 lg:col-4 " + styles.statsCard}>
            <div className=" shadow-2 p-3 border-1 border-50 border-round">
              <div className="flex justify-content-between ">
                <div>
                  <span className="block text-500 font-medium ">
                    Female employees
                  </span>
                  <div className="text-900 font-medium text-4xl mb-1">
                    {numberOfFemale ?? "loading"}
                  </div>
                </div>
                <div>
                  <i className="pi pi-user text-4xl text-500 font-medium "></i>
                </div>
              </div>
            </div>
          </div>
          <div className={"col-12 md:col-6 lg:col-4 " + styles.statsCard}>
            <div className=" shadow-2 p-3 border-1 border-50 border-round">
              <div className="flex justify-content-between ">
                <div>
                  <span className="block text-500 font-medium ">
                    Employee of the year
                  </span>
                  <div className="flex justify-content-between ">
                    {
                    /*    <Avatar
                    image={
                      "https://api.lorem.space/image/face?w=200&h=200&hash=" +
                      Math.random().toString(8).slice(2)
                    }
                    size="normal"
                    shape="circle"
                    style={{height:"15px!important;",width:"15px!important;"}}
                  /> */}
                    <div className="text-900 font-medium text-2xl mb-1">
                      {bestEmployee?.name ?? "loading"}
                    </div>
                  </div>
                </div>
                <div>
                  <i className="pi pi-star text-4xl text-500 font-medium "></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
