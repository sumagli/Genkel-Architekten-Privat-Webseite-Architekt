import React, { useState, useEffect } from "react";
import styles from "./Navbar.module.css";
import { BiMenu } from "react-icons/bi";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaHome } from "react-icons/fa";

interface NavbarProps {
  setOverlay: (overlay: boolean) => void;
  overlay: boolean;
  mainPage: boolean;
}

const Navbar = ({ setOverlay, overlay, mainPage }: NavbarProps) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    if (!mainPage) {
      setIsScrolled(true); // Always true if not mainPage
      return; // No need to set up a scroll listener
    }

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    // Set up the scroll listener for mainPage
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [mainPage]); // Add mainPage as a dependency

  return (
    <div
      className={`${styles.navbar} ${isScrolled ? styles.scrolled : ""} ${
        overlay ? styles.fadeOut : styles.fadeIn
      } `}
    >
      <nav className={styles.topBar}>
        <ul>
          <li>
            <a href="/" className={styles.iconLink}>
              Aktuelles
            </a>
          </li>

          <li>
            <a href="/Projekte" className={styles.iconLink}>
              Projekte
            </a>
          </li>
          <li>
            <a href="/Ueber" className={styles.iconLink}>
              Über Genkel Architekten
            </a>
          </li>
          <li>
            <a href="/Lebenslauf" className={styles.iconLink}>
              Lebenslauf
            </a>
          </li>
          <li>
            <a href="/Kontakt" className={styles.iconLink}>
              Kontakt
            </a>
          </li>
        </ul>
      </nav>
      {isScrolled ? null : <hr className={styles.hr} />}
    </div>
  );
};

export default Navbar;
