import { BreadCrumb } from "primereact/breadcrumb";
import { Rating } from "primereact/rating";
import { Tag } from "primereact/tag";
import { Button } from "primereact/button";
import { Dropdown } from "primereact/dropdown";
import { EmployeeInterface } from "../../../models/Employee";
import { Avatar } from "primereact/avatar";
import styles from "./CardItem.module.css";

export function CardItem(props: any) {
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
    <div className="col-12 sm:col-6 lg:col-12 xl:col-4 p-2">
      <div className="p-4 border-1 surface-border surface-card border-round">
        {/*  <div className="flex flex-wrap align-items-center justify-content-between gap-2">
          <div className="flex align-items-center gap-2">
            <i className="pi pi-tag"></i>
            <span className="font-semibold">{props.employee.name}</span>
          </div>
          <Tag
            value={props.employee.name}
            severity={getSeverity(props.employee)}
          ></Tag>
        </div> */}
        <div className="flex flex-column align-items-center gap-3 py-5">
          <Avatar
            image={
              "https://api.lorem.space/image/face?w=200&h=200&hash=" +
              Math.random().toString(8).slice(2)
            }
            size="xlarge"
            shape="circle"
          />
          <div className="text-2xl font-bold">{props.employee.name}</div>
          <div className="text-1xl ">{props.employee.email}</div>
          <Rating
            value={props.employee.score}
            readOnly
            cancel={false}
            stars={10}
          ></Rating>
        </div>
        <div className="flex align-items-center justify-content-between">
          <span className="text-2xl font-semibold">${props.employee.name}</span>
          <Button
            icon="pi pi-shopping-cart"
            className="p-button-rounded"
            disabled={props.employee.name === "OUTOFSTOCK"}
          ></Button>
        </div>
      </div>
    </div>
  );
}
