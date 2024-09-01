import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";

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
            onBlur={toggleSearch} // Скрыть поле поиска при потере фокуса
          />
        ) : (
          <button className={styles.searchButton} onClick={toggleSearch}>
            <img src="/images/icon-search.svg" alt="Search" />
          </button>
        )}
      </div>
      <nav>
        <Link to="/" className={styles.menu}>
          Главная
        </Link>
        <Link to="/game" className={styles.menu}>
          Карточки
        </Link>
      </nav>
      <div className={styles.authButtons}>
        <button>Зарегистрироваться</button>
        <button>Выйти</button>
      </div>
    </nav>
  );
}

export default Header;
