import React from 'react';
import styles from './NewFooter.module.css';
import "../../Assats/Fonts/Fonts.css"; // Corrected the typo in the path
import { FaInstagram } from "react-icons/fa";
import { useOpeningTimes } from '../../Helper/service';

interface FooterProps {
  mainPage: boolean;
}

const NewFooter = ({ mainPage }: FooterProps) => {
  const openingTimes = useOpeningTimes();

  return (
    <div className={styles.NewFooter} >
      <div className={`${mainPage ? styles.blackbar : ''}`} />
      <div className={`${styles.footer} ${!mainPage ? styles.footerNotFixed : ''}`} >
        <h1 style={{ paddingBottom: `30px` }}>HAAR ZWEI OOH!</h1>
        <hr />
        <div className={styles.footerContent}>
          <div className={styles.links}>
            <h3>Seitenmenü:</h3>
            {(mainPage) &&
              <div>
                <a href="#Directions">Anfahrt</a><br />
                <a href="#Pricing">Preise</a><br />
                <a href="#Team">Team</a><br /> <br />
              </div>
            }
            <a href="/Impressum">Impressum</a><br />
            <a href="/Datenschutz">Datenschutz</a>
          </div>
          <div className={styles.openingTimes}>
            <h3>Öffnungszeiten:</h3>
            {openingTimes.map(({ day, hours }) => (
              <p key={day}>{`${day}: ${hours}`}</p>
            ))}
          </div>
          <div>
            <h3>Kontakt:</h3>
            <p>Hackstraße 22</p>
            <p>70190 Stuttgart</p>
            <p>0711 - 262 99 66</p>
            <a href="https://www.instagram.com/haarzweiooh_stuttgart/" target="_blank" rel="noopener noreferrer" className={styles.iconLink}>
              <FaInstagram color='white' size="32px" />
            </a>
          </div>
        </div>
        <hr />
        <div style={{ paddingBottom: `40px` }} />
      </div>
    </div>
  );
}

export default NewFooter;
