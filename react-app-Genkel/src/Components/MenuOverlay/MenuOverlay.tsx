import React, { useEffect } from 'react';
import { HashRouter as Router, Link } from 'react-router-dom'; // Import HashRouter and Link
import styles from './MenuOverlay.module.css';
import { MdClose } from "react-icons/md";

interface NavbarProps {
    setOverlay: (overlay: boolean) => void;
    overlay: boolean;

}

const MenuOverlay = ({ setOverlay, overlay }: NavbarProps) => {
    useEffect(() => {
        if (overlay) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    }, [overlay]);

    const handleLinkClick = () => {
        setOverlay(!overlay);
    };

    return (
        <div>
            <div className={`${styles.MenuOverlay} ${overlay ? styles.open : styles.closed}`}>
                <div className={styles.MenuOverlayContent}>

                    {/* Use the Link component for navigation */}
                    <div className={styles.MenuOverlayContentItem}>
                        <a href="#Directions" onClick={handleLinkClick}>Anfahrt</a><br />
                    </div>
                    <div className={styles.MenuOverlayContentItem}>
                        <a href="#Pricing" onClick={handleLinkClick}>Preise</a><br />
                    </div>
                    <div className={styles.MenuOverlayContentItem}>
                        <a href="#Team" onClick={handleLinkClick}>Team</a><br />
                    </div>
                    <div className={styles.MenuOverlayContentItem}>
                        <a href="#Footer" onClick={handleLinkClick}>Öffnungszeiten</a><br />
                    </div>
                    <div className={styles.MenuOverlayContentItem}>
                        <a href="#Footer" onClick={handleLinkClick}>Kontakt</a><br />
                    </div>

                </div>
                <div className={styles.MenuOverlayIcon}>
                    <MdClose color='white' onClick={() => setOverlay(!overlay)} />
                </div>
            </div>
            <div className={styles.MenuOverlayRight} onClick={() => setOverlay(!overlay)}></div>
        </div>
    );
};

export default MenuOverlay;
