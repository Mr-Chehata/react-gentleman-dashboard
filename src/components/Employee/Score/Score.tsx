import { Rating } from "primereact/rating";
import styles from "./Score.module.css";

export function Score({ value = 0 }: { value: number }) {
  return (
    <Rating value={value / 10} readOnly cancel={false} stars={10}></Rating>
  );
}
