import React from 'react';
import styles from './CreateTemplates.module.css';
import { SearchBox } from '../SearchBox/SearchBox';
import { CreateTemplateList } from './CreateTemplateList';
import data from './CreateTemplatesData.json';
import { CreateTemplatesTabs } from './CreateTemplatesTabs';

export function CreateTemplates() {
  return (
    <div className={styles.root}>
      <div className={styles.header}>
        <h3>Create with templates</h3>
        <SearchBox placeholder="Search templates" className={styles.searchBox} />
      </div>
      <CreateTemplatesTabs />
      <CreateTemplateList query={data.queries[0]} />
    </div>
  );
}
