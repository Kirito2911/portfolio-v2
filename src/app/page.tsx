import Image from "next/image";
import styles from "./page.module.css";
import Main from "./main/main";

export default function Home() {
  return (
    <main className={styles.main}>
      <Main></Main>
    </main>
  );
}
