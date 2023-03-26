import { BreadCrumb } from "primereact/breadcrumb";
import { Rating } from "primereact/rating";
import { Tag } from "primereact/tag";
import { Button } from "primereact/button";
import { Dropdown } from "primereact/dropdown";
import { EmployeeInterface } from "../../../models/Employee";
import { Avatar } from "primereact/avatar";
import styles from "./CardItem.module.css";
import { Score } from "../Score/Score";
import { Outlet, Link } from "react-router-dom";
import { Skeleton } from "primereact/skeleton";

export function CardItem(props: any) {
  return !props.isLoading && props.employee ? (
    <div className="col-12 sm:col-6 lg:col-12 xl:col-4 p-2   mb-2">
      <div className="p-3 border-1 surface-border surface-card border-round">
        <div className="flex flex-wrap align-items-center justify-content-between gap-2">
          <div className="flex align-items-center gap-2">
            <i className="pi pi-tag"></i>
            <span className="font-semibold">{props.employee.position}</span>
          </div>
          {/* <Tag value={props.employee.name}></Tag> */}
        </div>
        {/*  <div className="flex align-items-center justify-content-between">
        
          <Button
            icon="pi pi-shopping-cart"
            className="p-button-rounded"
            disabled={props.employee.name === "OUTOFSTOCK"}
          ></Button>
          <Button
            icon="pi pi-shopping-cart"
            className="p-button-rounded"
            disabled={props.employee.name === "OUTOFSTOCK"}
          ></Button>
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
          <div className="text-2xl font-bold">
            <Link
              to={`/employees/${props.employee.id}`}
              className={styles.NameLink}
            >
              {props.employee.name}
            </Link>
          </div>
          <div className="text-1xl ">{props.employee.email}</div>
          <Score value={props.employee.score}></Score>
        </div>
      </div>
    </div>
  ) : (
    /* Loading status card UI */
    <div className="card col-12 sm:col-6 lg:col-12 xl:col-4 p-2">
      <div className="custom-skeleton p-2">
        <div className="flex mb-3">
          <Skeleton shape="circle" size="4rem" className="mr-2"></Skeleton>
          <div>
            <Skeleton width="10rem" className="mb-2"></Skeleton>
            <Skeleton width="5rem" className="mb-2"></Skeleton>
            <Skeleton height=".5rem"></Skeleton>
          </div>
        </div>
        <Skeleton width="100%" height="150px"></Skeleton>
        <div className="flex justify-content-between mt-3">
          <Skeleton width="4rem" height="2rem"></Skeleton>
          <Skeleton width="4rem" height="2rem"></Skeleton>
        </div>
      </div>
    </div>
  );
}
