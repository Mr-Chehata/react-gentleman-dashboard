
import { Button } from "primereact/button";
import { Divider } from "primereact/divider";
import { Avatar } from "primereact/avatar";
import styles from "./CardItem.module.css";
import { Score } from "../Score/Score";
import {  Link, useNavigate } from "react-router-dom";
import { Skeleton } from "primereact/skeleton";
import DateHelper from "../../../helpers/DateHelper";

export function CardItem(props: any) {
  const navigate = useNavigate();

  function handleShowClick() {
    navigate("/employees/" + props.employee?.id);
  }
  return !props.loading && props.employee ? (
    <div
      className="col-12 sm:col-6 lg:col-12 xl:col-4 p-2 mb-2"
      key={props.employee.id}
    >
      <div className="p-3 border-1 surface-border surface-card border-round">
        <div className="flex flex-wrap align-items-center justify-content-between gap-2">
          <div className="flex align-items-center gap-2">
            <i className="pi pi-briefcase text-600 text-1xl"></i>
            <span className="text-600 text-1xl">{props.employee.position}</span>
          </div>
          <div className="flex align-items-center gap-2">
            <Button
              icon="pi pi-eye"
              className="p-button-rounded"
              onClick={handleShowClick}
            ></Button>
          </div>
        </div>
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
          <div className=" text-600 text-1xl ">{props.employee.email}</div>
          <Score value={props.employee.score}></Score>
          <div className="flex align-items-center   border-300 flex-wrap">
            <div className="text-600 font-medium text-xl text-center">
              <div className="text-400 font-light text-sm text-center">
                Gender
              </div>
              {props.employee.gender.charAt(0).toUpperCase() +
                props.employee.gender.slice(1)}
            </div>
            <Divider layout="vertical" />
            <div className="text-600 font-medium text-xl text-center text-center">
              <div className="text-400 font-light text-sm text-center">Age</div>
              {DateHelper.getAge(props.employee.birthDate)}
            </div>
          </div>
          <div className=" ">
            <div className="text-600 font-medium text-xl mb-2 text-center">
              <div className="text-400 font-light text-sm text-center">
                Position
              </div>
              {props.employee.position}
            </div>
            <div className="text-600 font-medium text-xl text-center">
              <div className="text-400 font-light text-sm text-center">
                Recrutement Date
              </div>
              {DateHelper.getHumanizedDate(props.employee.recrutementDate)}
              <span className="text-600 font-medium text-sm">
                {" (" + props.employee.recrutementDate + ")"}{" "}
              </span>
            </div>
          </div>
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
