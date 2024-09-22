import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import Menu from "../Menu/Menu";

function Header() {
  const [isSearchActive, setIsSearchActive] = useState(false);

  const toggleSearch = () => {
    setIsSearchActive(!isSearchActive);
  };

  return (
    <nav className={styles.header}>
      <Link to="/" className={styles.logo}>
        <img src="/images/icon-dictionary.svg" alt="Logo" />
      </Link>
      <div className={styles.search}>
        {isSearchActive ? (
          <input
            type="text"
            placeholder="Поиск..."
            className={styles.searchInput}
            onBlur={toggleSearch}
          />
        ) : (
          <button className={styles.searchButton} onClick={toggleSearch}>
            <img src="/images/icon-search.svg" alt="Search" />
          </button>
        )}
      </div>
      <Menu />
      <div className={styles.authButtons}>
        <button>Зарегистрироваться</button>
        <button>Выйти</button>
      </div>
    </nav>
  );
}

export default Header;
