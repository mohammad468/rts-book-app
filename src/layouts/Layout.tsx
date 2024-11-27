import { ReactNode } from "react";
import styles from "./Layout.module.css";

type Props = {
  children: ReactNode;
};

function Layout({ children }: Props): ReactNode {
  return (
    <>
      <header className={styles.header}>
        <h1>Book App</h1>
        <p>
          study all book | <span>get books</span>
        </p>
      </header>
      {children}
      <footer className={styles.footer}>
        <p>developed by mohammad with ❤️</p>
      </footer>
    </>
  );
}

export default Layout;
