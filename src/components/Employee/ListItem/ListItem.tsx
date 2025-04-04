import { BreadCrumb } from "primereact/breadcrumb";
import { Rating } from "primereact/rating";
import { Tag } from "primereact/tag";
import { Button } from "primereact/button";
import { Dropdown } from "primereact/dropdown";
import styles from "./ListItem.module.css";
import { EmployeeInterface } from "../../../Models/Employee";

export function ListItem(props: any) {
  const getSeverity = (employee: EmployeeInterface) => {
    switch (employee.name) {
      case "INSTOCK":
        return "success";

      case "LOWSTOCK":
        return "warning";

      case "OUTOFSTOCK":
        return "danger";
      default:
        return "info";
    }
  };
  return (
    <div className="col-12">
    <div className="flex flex-column xl:flex-row xl:align-items-start p-4 gap-4">
      <img
        className="w-9 sm:w-16rem xl:w-10rem shadow-2 block xl:block mx-auto border-round"
        src={`https://primefaces.org/cdn/primereact/images/product/bamboo-watch.jpg`}
        alt={props.employee.name}
      />
      <div className="flex flex-column sm:flex-row justify-content-between align-items-center xl:align-items-start flex-1 gap-4">
        <div className="flex flex-column align-items-center sm:align-items-start gap-3">
          <div className="text-2xl font-bold text-900">{props.employee.name}</div>
          
          <div className="flex align-items-center gap-3">
            <span className="flex align-items-center gap-2">
              <i className="pi pi-tag"></i>
              <span className="font-semibold">{props.employee.name}</span>
            </span>
            <Tag
              value={props.employee.score}
              severity={getSeverity(props.employee)}
            ></Tag>
          </div>
        </div>
        <div className="flex sm:flex-column align-items-center sm:align-items-end gap-3 sm:gap-2">
          <span className="text-2xl font-semibold">${props.employee.name}</span>
          <Button
            icon="pi pi-shopping-cart"
            className="p-button-rounded"
            disabled={props.employee.name === "OUTOFSTOCK"}
          ></Button>
        </div>
      </div>
    </div>
  </div>
  );
}
