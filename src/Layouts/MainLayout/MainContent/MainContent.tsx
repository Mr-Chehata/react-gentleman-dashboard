import style from "./MainContent.module.css";

import { Menubar } from "primereact/menubar";
import { InputText } from "primereact/inputtext";
import { Breadcrumb } from "../../../components/Breadcrumb/Breadcrumb";

export default function MainContent(props: any) {
  const start = (
    <img
      alt="logo"
      src="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png"
      height="40"
      className="mr-2"
    ></img>
  );

  const items = [{ label: "Dashbaord" }];
  const home = {
    icon: "pi pi-home",
    url: "https://www.primefaces.org/primereact/showcase",
  };
  return (
    <div className={style.MainContent}>
      <Breadcrumb items={items} home={home} />
      {props.children}
    </div>
  );
}
