import React, { useState, useEffect } from 'react';
import styles from './Navbar.module.css';
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
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [mainPage]); // Add mainPage as a dependency

  return (
    <div className={`${styles.navbar} ${isScrolled ? styles.scrolled : ''} ${overlay ? styles.fadeOut : styles.fadeIn} `} >
      <nav className={styles.topBar}>
        <ul>
          {mainPage &&
            <li className={styles.pointer} onClick={() => setOverlay(!overlay)}>
              <BiMenu color='white' />
              Menü
            </li>
          }
          {!mainPage &&
            // Render an invisible, non-interactive placeholder
            <div className={styles.placeholder}></div>
          }

          <li>
            <a href="/" className={styles.iconLink}>
              <FaHome color='white' />
            </a>
          </li>
          <li>
            <BsFillTelephoneFill color='white' />
            <label> </label>0711 - 262 99 66
          </li>
        </ul>
      </nav>
      {isScrolled ? null : <hr className={styles.hr} />}
    </div>
  );
};

export default Navbar;
