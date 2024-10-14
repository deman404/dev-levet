import Image from "next/image";
import styles from "./page.module.css";
import Header from "./Components/Header";

export default function Home() {
  return (
    <div
      className={styles.page}
      style={{ display: "flex", flexDirection:'column',alignItems:"center" }}
    >
      <Header />
    </div>
  );
}
