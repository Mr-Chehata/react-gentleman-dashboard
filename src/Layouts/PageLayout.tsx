import LeftLayout from "./LeftLayout/LeftLayout";
import MainLayout from "./MainLayout/MainLayout";
import style from "./PageLayout.module.css";

export default function PageLayout(props: any) {
  return (
    <div className={style.PageLayout}>
      <LeftLayout></LeftLayout>
      <MainLayout title={props.title}> {props.children}</MainLayout>
    </div>
  );
}
