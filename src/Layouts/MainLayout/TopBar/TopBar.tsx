import style from "./TopBar.module.css";
import { InputText } from "primereact/inputtext";
import Navbar from "../../../Components/Navbar/Navbar";
import React, { useState, useRef } from "react";
import { Toolbar } from "primereact/toolbar";
import { Button } from "primereact/button";
import { SplitButton } from "primereact/splitbutton";
import { Chip } from "primereact/chip";
import { Badge } from "primereact/badge";
import { Divider } from "primereact/divider";
import { Toast } from "primereact/toast";

export default function TopBar(props: any) {
  const toast = useRef(null);
  const items = [
    {
      label: "Light(not ready)",
      icon: "pi pi-sun",
    },
    {
      label: "Dark",
      icon: "pi pi-moon",
    },
  ];
  const save = () => {};
  const leftContents = (
    <React.Fragment>
      <Navbar></Navbar>
      <Button icon="pi pi-search" className="ml-2" />
      <span className="p-input-icon-left ml-3">
        <i className="pi pi-search" />
        <InputText
          value={""}
          placeholder="Search"
          className="p-inputtext-sm block  border-round"
        />
      </span>
    </React.Fragment>
  );

  const rightContents = (
    <React.Fragment>
      <div style={{ textAlign: "center" }}>
        <SplitButton
          label=""
          icon="pi pi-moon"
          onClick={save}
          model={items}
        ></SplitButton>
      </div>
      <Divider layout="vertical" />
      <div style={{ textAlign: "center", paddingTop: "10px" }}>
        <i
          className="pi pi-comment mr-3 p-text-secondary p-overlay-badge"
          style={{ fontSize: "1.3rem" }}
        >
          <Badge value="8"></Badge>
        </i>
      </div>
      <div style={{ textAlign: "center", paddingTop: "10px" }}>
        <i
          className="pi pi-bell mr-1 p-text-secondary p-overlay-badge"
          style={{ fontSize: "1.3rem" }}
        >
          <Badge value="2"></Badge>
        </i>
      </div>
      <Divider layout="vertical" />
      <Chip
        label="Bilel Chehata"
        image="https://media.licdn.com/dms/image/C4E03AQHJgWxDnfeIUg/profile-displayphoto-shrink_800_800/0/1600434992994?e=1683763200&v=beta&t=FLnuNxTEnyWAwoAPQExE4vJ2DLvs16OATl-iuvw22jo"
      />
    </React.Fragment>
  );
  return (
    <div className={style.TopBar}>
      <Toolbar left={leftContents} right={rightContents} />
    </div>
  );
}
