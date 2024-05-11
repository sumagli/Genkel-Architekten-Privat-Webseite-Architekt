import React from "react";
import styles from "./NewFooter.module.css";
import "../../Assats/Fonts/Fonts.css"; // Corrected the typo in the path
import { FaInstagram } from "react-icons/fa";
import { useOpeningTimes } from "../../Helper/service";

interface FooterProps {
  mainPage: boolean;
}

const NewFooter = ({ mainPage }: FooterProps) => {
  const openingTimes = useOpeningTimes();

  return (
    <div className={styles.NewFooter}>
      <div className={`${mainPage ? styles.blackbar : ""}`} />
      <div
        className={`${styles.footer} ${!mainPage ? styles.footerNotFixed : ""}`}
      >
        <h1 style={{ paddingBottom: `30px` }}>Genkel Architekten</h1>
        <hr />
        <div className={styles.footerContent}>
          <div className={styles.links}>
            <h3>Seitenmenü:</h3>
            <a href="/">Aktuelles</a>
            <br />
            <a href="/Projekte">Projekte</a>
            <br />
            <a href="/Bueroprofil">Büroprofil</a>
            <br />
            <a href="/Vita">Vita</a>
            <br />
            <a href="/Partner">Partner</a>
            <br />
            <br />
            <a href="/Impressum">Impressum</a>
            <br />
            <a href="/Datenschutz">Datenschutz</a>
            <br />
            <a href="/Credit">Credit</a>
          </div>
          <div className={styles.rechts}>
            <h3>Kontakt:</h3>
            <p>Heinrich-Baumann-Straße 7b</p>
            <p>70190 Stuttgart</p>
            <a href="mailto:genkel@genkelarchitekten.com">
              genkel@genkelarchitekten.com
            </a>
          </div>
        </div>
        <hr />
        <div style={{ paddingBottom: `40px` }} />
      </div>
    </div>
  );
};

export default NewFooter;
