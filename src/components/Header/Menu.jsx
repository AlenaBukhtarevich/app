import React from "react";
import { Link } from "react-router-dom";
import styles from "./Menu.module.css";

const links = [
  { path: "/", label: "Главная" },
  { path: "/game", label: "Карточки" }
];

function Menu() {
  return (
    <nav className={styles.menuContainer}>
      {links.map((link, index) => (
        <Link to={link.path} className={styles.menu} key={index}>
          {link.label}
        </Link>
      ))}
    </nav>
  );
}

export default Menu;
