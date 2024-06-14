import React from 'react';
import styles from './DocumentsListHeader.module.css';
import cx from 'classnames';
import type { Header } from './types/Header';

export type DocumentsListHeaderProps = React.AllHTMLAttributes<HTMLElement> & {
  items: Header[];
};

export function DocumentsListHeader(props: DocumentsListHeaderProps) {
  const { items } = props;

  return (
    <div className={cx(styles.root, props.className)}>
      {items.map((header) => (
        <div key={header.id} className={styles.cell}>
          {header.text}
        </div>
      ))}
    </div>
  );
}
