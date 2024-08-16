import React, { useState } from "react";
import styles from "./Header.module.css";

function Header() {
  const [isSearchActive, setIsSearchActive] = useState(false);

  const toggleSearch = () => {
    setIsSearchActive(!isSearchActive);
  };

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img src="/public/images/icon-dictionary.svg" alt="Logo" />
      </div>
      <div className={styles.search}>
        {isSearchActive ? (
          <input
            type="text"
            placeholder="Поиск..."
            className={styles.searchInput}
            onBlur={toggleSearch} // Скрыть поле поиска при потере фокуса
          />
        ) : (
          <button className={styles.searchButton} onClick={toggleSearch}>
            <img src="/public/images/icon-search.svg" alt="Search" />
          </button>
        )}
      </div>
      <div className={styles.authButtons}>
        <button className={styles.registerButton}>Зарегистрироваться</button>
        <button className={styles.logoutButton}>Выйти</button>
      </div>
    </header>
  );
}

export default Header;
