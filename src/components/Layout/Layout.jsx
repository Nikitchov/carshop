import React from "react";
import logo from "../../img/logo.png";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import CircleIcon from "../CircleIcon/CircleIcon";
import profile from "../../img/profile-logo.png";
import compare from "../../img/compare.png";
import charger from "../../img/charger.png";
import menu from "../../img/menu.png";
import { useState } from "react";
import NewsPage from "../NewsPage";
import styles from "./Layout.module.scss";

function Layout({ children }) {
  const [inputValue, setInputValue] = useState("");
  function handleChange(event) {
    setInputValue(event.target.value);
  }

  return (
    <div className={styles.layout}>
      <header className={styles.header}>
        <div className={styles.content}>
          <img src={logo} className={styles.logo} alt="logo" />
          <div className={styles.pic}></div>
          <div class={styles.search}>
            <input
              type="search"
              placeholder="Найдите ваш электромобиль"
              value={inputValue}
              className={styles.inputCars}
              onChange={handleChange}
            />
            {inputValue}
          </div>
        </div>
        <nav className={styles.links}>
          <Link to={"profile"}>
            <CircleIcon icon={profile} />
          </Link>
          <Link to={"charger"}>
            <CircleIcon icon={charger} />
          </Link>
          <Link to={"compare"}>
            <CircleIcon icon={compare} />
          </Link>
          <Link to={"menu"}>
            <CircleIcon icon={menu} />
          </Link>
        </nav>
      </header>
      {children}
    </div>
  );
}

export default Layout;
