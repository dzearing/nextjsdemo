import React from 'react';
import styles from './CreateTemplateList.module.css';
import { CreateTemplateItem } from './CreateTemplateItem';
import cx from 'classnames';

export type CreateTemplatesData = {
  queries: CreateTemplatesDataQuery[];
};

export type CreateTemplatesDataQuery = {
  name: string;
  images: {
    width: number;
    height: number;
    url: string;
  }[];
};

export const CreateTemplateList = (props: { query: CreateTemplatesDataQuery }) => (
  <div className={cx(styles.root)}>
    <div className={styles.flexContainer}>
      {props.query.images.map((image) => (
        <CreateTemplateItem key={image.url} image={image} />
      ))}
    </div>
    <div className={styles.leftOverlay} />
    <div className={styles.rightOverlay} />
  </div>
);
