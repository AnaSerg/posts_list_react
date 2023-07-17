import React from 'react';
import {Post} from "../Post/Post";
import styles from './postslist.module.scss';

export const PostsList = ({articles}) => {

    return (
        <ul className={styles.list}>
            {articles.length !== 0 ?
                articles.map((article, index) => (
                    <Post key={index} article={article} />
                ))
                    :
                <p className={styles.error}>Ничего не найдено</p>
            }
        </ul>
    );
};
