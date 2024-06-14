import React from 'react';
import styles from './Header.module.css';

export function ProfileButton() {
  return (
    <button className={styles.headerButton}>
      <span className={styles.profileCoin}>DZ</span>
    </button>
  );
}
