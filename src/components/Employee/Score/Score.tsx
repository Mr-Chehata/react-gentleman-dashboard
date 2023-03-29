import { Rating } from "primereact/rating";
import styles from "./Score.module.css";
export function Score({ value = 0 }: { value: number }) {
  return <Rating value={value / 10} cancel={false} stars={10} readOnly />;
}
