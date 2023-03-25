import { useMemo } from "react";
import { EmployeeInterface } from "../../../models/Employee";
import styles from "./EmployeesStatistics.module.css";

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

  const mvb: EmployeeInterface | null = useMemo(() => {
    if (employees.length === 0) return null;
    return employees.reduce((prev, current) => {
      if (current.score > prev.score) return current;
      return prev;
    }, employees[0]);
  }, [employees]);
  /* 
  const lastEmployee: EmployeeInterface | null = useMemo(() => {
    if (items.length === 0) return null;
    return items.reduce((prev, current) => {
      if (!isBefore(current.recrutementDate, prev.recrutementDate))
        return current;
      return prev;
    }, items[0]);
  }, [items]); */

  return (
    /* to custom components */
    <div>
      <div className="card grid mt-3">
        <div className="col-12 md:col-6 lg:col-4">
          <div className=" shadow-2 p-3 border-1 border-50 border-round">
            <div className="flex justify-content-between mb-3">
              <div>
                <span className="block text-500 font-medium mb-3">
                  Employees
                </span>
                <div className="text-900 font-medium text-xl">
                  {numberOfEmployees}
                </div>
              </div>
              <div
                className="flex align-items-center justify-content-center bg-blue-100 border-round"
                style={{ width: "2.5rem", height: "2.5rem" }}
              >
                <i className="pi pi-shopping-cart text-blue-500 text-xl"></i>
              </div>
            </div>
            {/*  <span className="text-green-500 font-medium">24 new </span>
            <span className="text-500">since last visit</span> */}
          </div>
        </div>
        <div className="col-12 md:col-6 lg:col-4">
          <div className=" shadow-2 p-3 border-1 border-50 border-round">
            <div className="flex justify-content-between mb-3">
              <div>
                <span className="block text-500 font-medium mb-3">
                  Male employees
                </span>
                <div className="text-900 font-medium text-xl">
                  {numberOfMale}
                </div>
              </div>
              <div
                className="flex align-items-center justify-content-center bg-orange-100 border-round"
                style={{ width: "2.5rem", height: "2.5rem" }}
              >
                <i className="pi pi-map-marker text-orange-500 text-xl"></i>
              </div>
            </div>
          </div>
        </div>

        <div className="col-12 md:col-6 lg:col-4">
          <div className=" shadow-2 p-3 border-1 border-50 border-round">
            <div className="flex justify-content-between mb-3">
              <div>
                <span className="block text-500 font-medium mb-3">
                  LAST HIRED
                </span>
                <div className="text-900 font-medium text-xl">$2.100</div>
              </div>
              <div
                className="flex align-items-center justify-content-center bg-orange-100 border-round"
                style={{ width: "2.5rem", height: "2.5rem" }}
              >
                <i className="pi pi-map-marker text-orange-500 text-xl"></i>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 md:col-6 lg:col-4">
          <div className=" shadow-2 p-3 border-1 border-50 border-round">
            <div className="flex justify-content-between mb-3">
              <div>
                <span className="block text-500 font-medium mb-3">Teams</span>
                <div className="text-900 font-medium text-xl">
                  {numberOfTeams}
                </div>
              </div>
              <div
                className="flex align-items-center justify-content-center bg-orange-100 border-round"
                style={{ width: "2.5rem", height: "2.5rem" }}
              >
                <i className="pi pi-map-marker text-orange-500 text-xl"></i>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 md:col-6 lg:col-4">
          <div className=" shadow-2 p-3 border-1 border-50 border-round">
            <div className="flex justify-content-between mb-3">
              <div>
                <span className="block text-500 font-medium mb-3">
                  Female employees
                </span>
                <div className="text-900 font-medium text-xl">
                  {numberOfFemale}
                </div>
              </div>
              <div
                className="flex align-items-center justify-content-center bg-orange-100 border-round"
                style={{ width: "2.5rem", height: "2.5rem" }}
              >
                <i className="pi pi-map-marker text-orange-500 text-xl"></i>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 md:col-6 lg:col-4">
          <div className=" shadow-2 p-3 border-1 border-50 border-round">
            <div className="flex justify-content-between mb-3">
              <div>
                <span className="block text-500 font-medium mb-3">
                  Employee of the year
                </span>
                <div className="text-900 font-medium text-xl">$2.100</div>
              </div>
              <div
                className="flex align-items-center justify-content-center bg-orange-100 border-round"
                style={{ width: "2.5rem", height: "2.5rem" }}
              >
                <i className="pi pi-map-marker text-orange-500 text-xl"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
