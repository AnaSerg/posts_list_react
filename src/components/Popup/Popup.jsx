import styles from "./popup.module.scss";
import React, {useRef} from "react";
import {useOutsideClick} from "../../hooks/useOutsideClick";

export const Popup = ({isPopupOpened, closePopup, title, description}) => {
    const ref = useRef(null);

    useOutsideClick(closePopup, ref);

    return (
        <div
            className={
                isPopupOpened
                    ? `${styles.popup} ${styles.opened}`
                    : styles.popup
            }
        >
            <div ref={ref} className={styles.container}>
                <button onClick={closePopup} className={styles.button}/>
                <h2 className={styles.title}>{title}</h2>
                <p className={styles.description}>{description}</p>
            </div>
        </div>
    );
};
