import React, {useState} from 'react';
import styles from './post.module.scss';
import {Popup} from "../Popup/Popup";

export const Post = ({article, index}) => {
    const [isPopupOpened, setIsPopupOpened] = useState(false);

    return (
        <>
            <li onClick={() => setIsPopupOpened(true)} className={styles.card} key={index}>
                <img className={styles.image} src={article.img} srcSet={article.img_2x} alt="изображение к статье"/>
                <div>
                    <p className={styles.tags}>{article.tags}</p>
                    <h2 className={styles.title}>{article.title}</h2>
                    <div className={styles.info}>
                        <p className={styles.author}>{article.autor}</p>
                        <div className={styles.dot}/>
                        <p className={styles.details}>{article.date}</p>
                        <div className={styles.dot}/>
                        <p className={styles.details}>{article.views} Views</p>
                    </div>
                    <p className={styles.description}>{article.text}</p>
                </div>
            </li>
            <Popup isPopupOpened={isPopupOpened} closePopup={() => setIsPopupOpened(false)} title={article.title} description={article.text}/>
        </>
    );
};
