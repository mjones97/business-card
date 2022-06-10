import React from "react";
import styles from "./About.module.css";

export default function About() {
  return (
    <main className={styles.about}>
      <h2 className={styles.header}>About</h2>
      <p className={styles.texts}>
        I am a frontend developer who loves solving problems. Helping people 
        have a great experience while navigating a website is a must. I code to
        express my creativity with no limits. 
      </p>
    </main>
  );
}
