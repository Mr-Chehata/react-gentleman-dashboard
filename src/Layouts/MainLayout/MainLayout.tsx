import style from "./MainLayout.module.css";
import TopBar from "./TopBar/TopBar";
import MainContent from "./MainContent/MainContent";
import { Employees } from "../../pages/Employees/Employees";

export default function MainLayout() {
  return (
    <div className={style.MainLayout}>
      <TopBar></TopBar>
      <MainContent /* currentPage="Dashbard" */>
         <Employees></Employees>
      </MainContent>
    </div>
  );
}
