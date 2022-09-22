import React from "react";
import styles from "./styles.module.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <div className={styles.firstPart}>
          <div className={styles.logo}>
            <h3>logo</h3>
          </div>
          <ul className={styles.list}>
            <li className={styles.list_item}>
              <a href="#">Inspiration</a>
            </li>
            <li className={styles.list_item}>
              <a href="#">Find work</a>
            </li>
            <li className={styles.list_item}>
              <a href="#">Learn design</a>
            </li>
            <li className={styles.list_item}>
              <a href="#">Go Pro</a>
            </li>
            <li className={styles.list_item}>
              <a href="#">Design Files</a>
            </li>
            <li className={styles.list_item}>
              <a href="#">Hire Designers</a>
            </li>
          </ul>
        </div>
        <div className={styles.secondPart}>
          <ul>
            <li>

            </li>
            <li className={styles.signIn}>Sign in</li>
          </ul>
          <button className={styles.shareBtn}>share my work</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
