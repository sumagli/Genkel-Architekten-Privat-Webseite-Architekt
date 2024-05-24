import { useState, useEffect } from "react";
import styles from "./Navbar.module.css";
import { BiMenu } from "react-icons/bi";
import { BsFillHouseDoorFill } from "react-icons/bs";

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

  // Function to handle menu click on mobile
  const handleMenuClick = () => {
    setOverlay(true);
  };

  return (
    <div
      className={`${styles.navbar} ${isScrolled ? styles.scrolled : ""} ${
        overlay ? styles.fadeOut : styles.fadeIn
      } `}
    >
      <nav className={styles.topBar}>
        <ul>
          <div className={styles.mobileMenu}>
            <li></li>
            <li>
              <a href="/">
                <BsFillHouseDoorFill color="white" />
              </a>
            </li>
            <li onClick={handleMenuClick}>
              <BiMenu color="white" />
            </li>
          </div>
          {/* Hide these on mobile */}
          <div className={styles.desktopMenuItems}>
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
              <a href="/Bueroprofil" className={styles.iconLink}>
                Büroprofil
              </a>
            </li>
            <li>
              <a href="/Vita" className={styles.iconLink}>
                Vita
              </a>
            </li>
            <li>
              <a href="/Partner" className={styles.iconLink}>
                Partner
              </a>
            </li>
          </div>
        </ul>
      </nav>
      {isScrolled ? null : <hr className={styles.hr} />}
    </div>
  );
};

export default Navbar;
