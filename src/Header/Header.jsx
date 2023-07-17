import React, {useState} from 'react';
import styles from './header.module.scss';
import Logo from '../../assets/logo.svg';

export const Header = ({ onFilterChange, openSideMenu }) => {
    const [isSearchOpened, setIsSearchOpened] = useState(false);

    return (
        <header className={styles.header}>
            <button onClick={openSideMenu} className={styles.menuBtn}/>
            <div className={styles.logoContainer}>
                <img src={Logo} alt="logo" className={styles.logo} />
            </div>
            <input
                type="text"
                placeholder="Поиск статьи"
                className={isSearchOpened ? `${styles.filterInput} ${styles.opened}` : styles.filterInput}
                onChange={onFilterChange}
            />
            <button onClick={() => setIsSearchOpened(!isSearchOpened)} className={styles.search} />
        </header>
    );
};

