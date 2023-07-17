import React from 'react';
import styles from './submenu.module.scss';

export const Submenu = () => {
    const menu = [
        {
            name: "Post Header",
            link: "#"
        },
        {
            name: "Post Layout",
            link: "#"
        },
        {
            name: "Share Buttons",
            link: "#"
        },
        {
            name: "Gallery Post",
            link: "#"
        },
        {
            name: "Video Post",
            link: "#"
        }
    ]
    return (
        <ul className={styles.submenu}>
            {menu.map((item) => (
                <li key={item.name} className={styles.item}>
                    <a href={item.link}>{item.name}</a>
                    <button className={styles.button}/>
                </li>
            ))}
        </ul>
    );
};
