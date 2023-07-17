import React from 'react';
import styles from './menuitem.module.scss';
import {Submenu} from "../Submenu/Submenu";

export const MenuItem = ({item}) => {
    return (
        <li className={styles.item}>
            <p className={styles.itemName}>{item}</p>
            <button className={styles.itemButton}/>
            <Submenu />
        </li>
    );
};
