import style from "./MainContent.module.css";

import { Breadcrumb } from "../../../Components/Breadcrumb/Breadcrumb";

export default function MainContent(props: any) {
  const start = (
    <img
      alt="logo"
      src="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png"
      height="40"
      className="mr-2"
    ></img>
  );

  const home = {
    icon: "pi pi-home",
    url: "/",
  };
  return (
    <div className={style.MainContent}>
      <Breadcrumb items={props.breadcrumb} home={home} />
      {/* Here page content  */}
      {props.children}
    </div>
  );
}
