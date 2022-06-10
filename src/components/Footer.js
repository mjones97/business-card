import React from "react";
import styles from "./Footer.module.css";
import githubLogo from "../assets/Github-logo.png";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.socialMedia}>
        <a
          target="_blank"
          rel="noopener noreferrer"
          className={styles.links}
          href="https://github.com/tashasyarifah"
        >
          <img
            src={githubLogo}
            alt="Click to open Tasha's GitHub"
            className={styles.socialIcons}
          />
        </a>
      </div>
    </footer>
  );
}
