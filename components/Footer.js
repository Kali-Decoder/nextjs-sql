import React from "react";
import styles from "./footer.module.css";
const Footer = () => {
  return (
    <div className="container">
      <div className={`${styles.footer} container bg-dark mx-auto p-1`}>
        <p className="text-center text-white">
          Copy Right --Nikku DarkCodderz... (Nextjs-SQL)
        </p>
      </div>
    </div>
  );
};

export default Footer;
