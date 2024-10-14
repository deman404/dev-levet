import Image from "next/image";
import styles from "./page.module.css";
import Header from "./Components/Header";
import Banner from "./Components/Banner";
export default function Home() {
  return (
    <div
      className={styles.page}
      style={{ display: "flex", flexDirection:'column',alignItems:"center" }}
    >
      <Header />
      <Banner/>
    </div>
  );
}
