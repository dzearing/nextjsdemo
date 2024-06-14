import React from 'react';
import styles from './RecentDocuments.module.css';
import { DocumentsList } from './DocumentsList';
import data from './RecentDocumentsData.json';
import { SearchBox } from '../SearchBox/SearchBox';
import type { Item } from './types/Item';
import type { Header } from './types/Header';

export const RecentDocuments = () => {
  return (
    <div className={styles.root}>
      <div className={styles.header}>
        <h3>Recent documents</h3>
        <SearchBox className={styles.searchBox} placeholder="Filter documents" />
      </div>
      <DocumentsList listHeaders={data.headers as Header[]} items={data.items as Item[]} />
    </div>
  );
};
