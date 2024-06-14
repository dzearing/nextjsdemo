import React from 'react';
import styles from './CreateTemplateItem.module.css';

export const CreateTemplateItem = (props: {
  image: { url: string; width: number; height: number };
  landscape?: boolean;
}) => (
  <div className={styles.root} style={{ aspectRatio: props.image.width / props.image.height }}>
    <img className={styles.image} src={`./images/${props.image.url}`} />
    <div className={styles.actions}>
      <button className={styles.button}>Preview</button>
      <button className={styles.button}>Edit</button>
    </div>
  </div>
);
