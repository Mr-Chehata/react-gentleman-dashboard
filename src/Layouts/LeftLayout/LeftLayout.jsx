import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import { Avatar } from "primereact/avatar";
import { Divider } from "primereact/divider";
import style from "./LeftLayout.module.css";
import { Link, useNavigate } from "react-router-dom";
export default function LeftLayout() {
  return (
    <div className={style.LeftLayout}>
      <div className={" mt-5 mb-4 text-center " + style.Profile}>
        <Avatar
          shape="circle"
          size="xlarge"
          image="https://media.licdn.com/dms/image/C4E03AQHJgWxDnfeIUg/profile-displayphoto-shrink_800_800/0/1600434992994?e=1683763200&v=beta&t=FLnuNxTEnyWAwoAPQExE4vJ2DLvs16OATl-iuvw22jo"
        />
        <div className="text-400 font-medium text-xl"> Bilel chehata </div>
        <Divider layout="horizontal" />
      </div>
      <div className="mb-3 mt-3">
        <div className="text-600 font-medium text-medium text-left mb-1 mt-2">
          Menu
        </div>
        <div className="text-2xl font-bold">
          <Link to={`/employees`} className={style.link}>
            Employees
          </Link>
        </div>
      </div>
    </div>
  );
}
