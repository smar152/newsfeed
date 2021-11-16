import Link from "next/link";
import styles from "../styles/Menu.module.css";
export default function Menu() {
  return (
    <div className={styles.menu}>
      <div className={styles.item}>
        <Link href="/">
          <a>Search</a>
        </Link>
      </div>
      <div className={styles.item}>
        <Link href="/news">
          <a>News</a>
        </Link>
      </div>
    </div>
  );
}
