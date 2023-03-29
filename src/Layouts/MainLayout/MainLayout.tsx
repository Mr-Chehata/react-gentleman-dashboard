import MainContent from "./MainContent/MainContent";
import style from "./MainLayout.module.css";
import TopBar from "./TopBar/TopBar";


export default function MainLayout(props: any) {
  return (
    <div className={style.MainLayout}>
     <TopBar></TopBar>
     <MainContent title={props.title} breadcrumb={props.breadcrumb}>{props.children}</MainContent>
    </div>
  );
}
