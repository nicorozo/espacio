import React from "react";
import styles from "./Footer.module.css";
import Logo from "../Header/Logo";

const Footer = () => {
  return (
    <div className={styles.main}>
      <div className={styles.upperContainer}>
        <Logo />
        {/* Space for pages */}
      </div>
      <div className={styles.spacer}></div>
      <div className={styles.lowerSection}>
        <div className={styles.lowerSides}>
          <span>© 2025 Espacio. All rights reserved.</span>
        </div>
        <div className={styles.lowerSides}>
          <div className={styles.lowerSideSeparator}>
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
            <span>Cookies Settings</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
