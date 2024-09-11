import React from "react";
import Main from "../components/Main/Main";
import styles from "./WordTablePage.module.css";

function WordTablePage() {
  return (
    <div className={styles["page-table"]}>
      <h1>Таблица слов</h1>
      {<Main />}
    </div>
  );
}

export default WordTablePage;
