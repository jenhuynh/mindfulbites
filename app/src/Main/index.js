import * as React from "react";

import { Login } from "../auth/widgets";

import styles from "./styles.module.scss";
const Main = () => {
  return (
    <>
      <div className={styles.bodymain}>
        <h1 className={styles.mainh1}>Mindful Bites</h1>
        <div className={styles.mainbtn}>
          <Login />
        </div>
      </div>
    </>
  );
};

export default Main;
