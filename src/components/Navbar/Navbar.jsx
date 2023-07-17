import React, { useState, useEffect } from 'react';
import styles from './navbar.module.scss';
import { MenuItem } from "../MenuItem/MenuItem";
import Logo from "../../assets/logo.svg";

export const Navbar = ({isMobileMenuOpen, closeMobileMenu}) => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileView, setIsMobileView] = useState(false);

    const menuItems = ['Demos', 'Post', 'Features', 'Categories', 'Shop'];

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 200) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        const handleResize = () => {
            setIsMobileView(window.innerWidth <= 680);
        };

        window.addEventListener('scroll', handleScroll);
        window.addEventListener('resize', handleResize);

        handleResize();

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <nav className={`${styles.navigation} ${isScrolled ? styles.scrolled : ''}`}>
            {isMobileView ? (
                <div className={isMobileMenuOpen ? `${styles.mobileMenu} ${styles.mobileMenuOpened}` : styles.mobileMenu}>
                    <div className={isMobileMenuOpen ? `${styles.mobileMenuContainer} ${styles.mobileMenuContainerOpened}` : styles.mobileMenuContainer}>
                        <div className={styles.mobileMenuContainerHeader}>
                            <img src={Logo} alt="logo" className={styles.logo} />
                            <button onClick={closeMobileMenu} className={styles.closeBtn}/>
                        </div>
                        <ul className={styles.list}>
                            {menuItems.map((item) => (
                                <MenuItem key={item} item={item} />
                            ))}
                        </ul>
                        <button className={styles.button}>Buy Now</button>
                    </div>
                </div>
            ) : (
                <>
                    {!isMobileView && (
                        <ul className={styles.list}>
                            {menuItems.map((item) => (
                                <MenuItem key={item} item={item} />
                            ))}
                        </ul>
                    )}
                    <button href="/" className={styles.button} >Buy Now</button>
                </>
            )}
        </nav>
    );
};


