import React from 'react';
import styles from './OfficeApp.module.css';
import { Header } from '../Header/Header';
import { CreateTemplates } from '../CreateTemplates/CreateTemplates';
import { RecentDocuments } from '../RecentDocuments/RecentDocuments';
import { Button } from '@fluentui/react-components';
import { AddIcon } from '../icons/AddIcon';
import { UploadIcon } from '../icons/UploadIcon';

export function OfficeApp() {
  return (
    <div className={styles.root}>
      <Header className={styles.header} />
      <div className={styles.content}>
        <h2>Welcome, David Zearing!</h2>
        <div className={styles.section}>
          <Button appearance="primary" icon={<AddIcon />}>
            New document
          </Button>
          <Button icon={<UploadIcon />}>Upload a file</Button>
        </div>
        <CreateTemplates />
        <RecentDocuments />
      </div>
    </div>
  );
}
