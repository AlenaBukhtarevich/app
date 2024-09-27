import React, { useContext } from "react";
import Main from "../components/Main/Main";
import { AppContext } from "../context/AppContext";
import styles from "./WordTablePage.module.css";

function WordTablePage() {
  const { error } = useContext(AppContext);

  return (
    <div className={styles["page-table"]}>
      <h1>Таблица слов</h1>
      {error && <div className={styles["error"]}>Ошибка: {error}</div>}
      <Main />
    </div>
  );
}

export default WordTablePage;
