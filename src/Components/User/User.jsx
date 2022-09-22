import React from "react";
import styles from "./styles.module.css";
// import UserIcon from "../../Assets/UserIcon.webp";

const User = () => {
  return (
    <div className={styles.wrapper}>
      <div>
        <h2>Website Design : landing page</h2>
        <p>Masud Rana • Follow • Hire Me</p>
      </div>
      <div>
        <button>SAVE</button>
        <button>Like</button>
      </div>
    </div>
  );
};

export default User;
