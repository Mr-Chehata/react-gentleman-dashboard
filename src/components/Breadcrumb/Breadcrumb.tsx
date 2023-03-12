import { BreadCrumb } from "primereact/breadcrumb";
import styles from "./Breadcrumb.module.css";

export function Breadcrumb(props: any) {
  return (
    <div>
      <BreadCrumb
        model={props.items}
        home={props.home}
        className={styles.BreadCrumb + " flex-1"}
      />
    </div>
  );
}
