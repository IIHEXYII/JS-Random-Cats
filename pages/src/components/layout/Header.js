import React from 'react';
import styles from '../../../../styles/Home.module.scss';

function Header() {
    return (
        <div className={styles.header}>
            <h1 className={styles.title}>Random Cats 🐱</h1>
        </div>
    )
}
export default Header