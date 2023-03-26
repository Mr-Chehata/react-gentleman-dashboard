import { useMemo } from "react";
import { Avatar } from "primereact/avatar";
import { AvatarGroup } from "primereact/avatargroup";
import { Badge } from "primereact/badge";
import { EmployeeInterface } from "../../../models/Employee";
import styles from "./EmployeesStatistics.module.css";
import DateHelper from "../../../helpers/DataHelper";

export function EmployeesStatistics({
  employees = [],
}: {
  employees: EmployeeInterface[];
}) {
  const numberOfEmployees = useMemo(() => {
    return employees.length;
  }, [employees]);

  const numberOfFemale = useMemo(() => {
    return employees.reduce((prev, current) => {
      if (current.gender.toLocaleLowerCase()[0] === "f") return prev + 1;
      return prev;
    }, 0);
  }, [employees]);

  const numberOfMale = useMemo(() => {
    return employees.reduce((prev, current) => {
      if (current.gender.toLocaleLowerCase()[0] === "m") return prev + 1;
      return prev;
    }, 0);
  }, [employees]);

  const numberOfTeams = useMemo(() => {
    const myteamSet = new Set();
    employees.forEach((it) => myteamSet.add(it.team));
    return myteamSet.size;
  }, [employees]);

  const bestEmployee: EmployeeInterface | null = useMemo(() => {
    if (employees.length === 0) return null;
    return employees.reduce((prev, current) => {
      if (current.score > prev.score) return current;
      return prev;
    }, employees[0]);
  }, [employees]);

  const lastEmployee: EmployeeInterface | null = useMemo(() => {
    if (employees.length === 0) return null;
    return employees.reduce((prev, current) => {
      if (!DateHelper.isBefore(current.recrutementDate, prev.recrutementDate))
        return current;
      return prev;
    }, employees[0]);
  }, [employees]);

  return (
    /* to custom components */
    <div>
      <div className="card grid mt-3">
        <div className={"col-12 md:col-6 lg:col-4 " + styles.statsCard}>
          <div className=" shadow-2 p-3 border-1 border-50 border-round h-100">
            <div className="flex justify-content-between ">
              <div>
                <span className="block text-500 font-medium">Employees</span>
                <div className="text-900 font-medium text-4xl mb-1">
                  {numberOfEmployees}
                  {/*    <span className="text-green-500 font-medium">
                    <AvatarGroup className="mt-1">
                      <Avatar
                        image={
                          "https://api.lorem.space/image/face?w=200&h=200&hash=" +
                          Math.random().toString(8).slice(2)
                        }
                        size="normal"
                        shape="circle"
                      />
                      <Avatar
                        image={
                          "https://api.lorem.space/image/face?w=200&h=200&hash=" +
                          Math.random().toString(8).slice(2)
                        }
                        size="normal"
                        shape="circle"
                      />
                      <Avatar
                        image={
                          "https://api.lorem.space/image/face?w=200&h=200&hash=" +
                          Math.random().toString(8).slice(2)
                        }
                        size="normal"
                        shape="circle"
                      />
                      <Avatar
                        label={"+" + (numberOfEmployees - 3).toString()}
                        shape="circle"
                        size="normal"
                        style={{ backgroundColor: "#9c27b0", color: "#ffffff" }}
                      />
                    </AvatarGroup>
                  </span> */}
                </div>
              </div>
              <div>
                <i className="pi pi-users text-4xl text-500 font-medium"></i>
              </div>
            </div>

            {/*    <span className="text-500">since last visit</span> */}
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
                  {numberOfMale}
                </div>
              </div>
              <div>
                <i
                  className="pi pi-user
 text-4xl text-500 font-medium"
                ></i>
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
                  {lastEmployee?.name}
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
                  {numberOfTeams}
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
                  {numberOfFemale}
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
                <div className="text-900 font-medium text-2xl mb-1">
                  {bestEmployee?.name}
                </div>
              </div>
              <div>
                <i className="pi pi-star text-4xl text-500 font-medium "></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
