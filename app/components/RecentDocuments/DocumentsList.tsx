import React from 'react';
import styles from './DocumentsList.module.css';
import { DocumentsListHeader } from './DocumentsListHeader';
import { DocumentsListItem } from './DocumentsListItem';
import type { Header } from './types/Header';
import type { Item } from './types/Item';

export type DocumentsListProps = React.AllHTMLAttributes<HTMLElement> & {
  listHeaders: Header[];
  items: Item[];
};

export function DocumentsList(props: DocumentsListProps) {
  const { listHeaders, items } = props;

  return (
    <div className={styles.root}>
      <DocumentsListHeader items={listHeaders} />
      {items.map((item) => (
        <DocumentsListItem key={item.id} item={item} />
      ))}
    </div>
  );
}
