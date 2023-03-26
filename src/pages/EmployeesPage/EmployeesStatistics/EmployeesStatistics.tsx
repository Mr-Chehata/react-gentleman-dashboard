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

  const mvb: EmployeeInterface | null = useMemo(() => {
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
        <div className="col-12 md:col-6 lg:col-4">
          <div className=" shadow-2 p-3 border-1 border-50 border-round">
            <div className="flex justify-content-between ">
              <div>
                <div className="text-900 font-medium text-xl mb-1">
                  {numberOfEmployees}
                </div>
                <span className="block text-500 font-medium">Employees</span>
              </div>
              <div
                className="flex align-items-center justify-content-center bg-blue-100 border-round"
                style={{ width: "2.5rem", height: "2.5rem" }}
              >
                <i className="pi pi-shopping-cart text-blue-500 text-xl"></i>
              </div>
            </div>
            {/*   <span className="text-green-500 font-medium">
             
              <AvatarGroup className="">
                <Avatar
                  image={"https://api.lorem.space/image/face?w=200&h=200&hash=" + Math.random().toString(8).slice(2)}
                  size="large"
                  shape="circle"
                />
                <Avatar
                    image={"https://api.lorem.space/image/face?w=200&h=200&hash=" + Math.random().toString(8).slice(2)}
                  size="large"
                  shape="circle"
                />
                <Avatar
                  image={"https://api.lorem.space/image/face?w=200&h=200&hash=" + Math.random().toString(8).slice(2)}
                  size="large"
                  shape="circle"
                />
                <Avatar
                image={"https://api.lorem.space/image/face?w=200&h=200&hash=" + Math.random().toString(8).slice(2)}
                  size="large"
                  shape="circle"
                />
                <Avatar
                  image={"https://api.lorem.space/image/face?w=200&h=200&hash=" + Math.random().toString(8).slice(2)}
                  size="large"
                  shape="circle"
                />
                <Avatar
                  label="+2"
                  shape="circle"
                  size="large"
                  style={{ backgroundColor: "#9c27b0", color: "#ffffff" }}
                />
              </AvatarGroup>
            </span>
           <span className="text-500">since last visit</span>   */}
          </div>
        </div>
        <div className="col-12 md:col-6 lg:col-4">
          <div className=" shadow-2 p-3 border-1 border-50 border-round">
            <div className="flex justify-content-between ">
              <div>
                <div className="text-900 font-medium text-xl mb-1">
                  {numberOfMale}
                </div>
                <span className="block text-500 font-medium ">
                  Male employees
                </span>
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
            <div className="flex justify-content-between ">
              <div>
                <div className="text-900 font-medium text-xl mb-1">
                  {lastEmployee?.name}
                </div>
                <span className="block text-500 font-medium ">
                  Last hired employee
                </span>
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
            <div className="flex justify-content-between ">
              <div>
                <div className="text-900 font-medium text-xl mb-1">
                  {numberOfTeams}
                </div>
                <span className="block text-500 font-medium ">Teams</span>
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
            <div className="flex justify-content-between ">
              <div>
                {" "}
                <div className="text-900 font-medium text-xl mb-1">
                  {numberOfFemale}
                </div>
                <span className="block text-500 font-medium ">
                  Female employees
                </span>
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
            <div className="flex justify-content-between ">
              <div>
                <div className="text-900 font-medium text-xl mb-1">{mvb?.name}</div>
                <span className="block text-500 font-medium ">
                  Employee of the year
                </span>
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
