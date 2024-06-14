import React from 'react';
import { PivotButton } from './PivotButton';
import styles from './CreateTemplatesTabs.module.css';
import { TabList, Tab } from '@fluentui/react-components';

/**
 * The current experience for tabs.
 */
export function CreateTemplatesTabs() {
  return (
    <div className={styles.root}>
      <PivotButton selected>Recommended</PivotButton>
      <PivotButton>Resumes</PivotButton>
      <PivotButton>Invoices</PivotButton>
      <PivotButton>Paper and reports</PivotButton>
      <PivotButton>Flyers</PivotButton>
      <PivotButton>Meeting notes</PivotButton>
    </div>
  );
}

/**
 * A Fluent-based TabList. Use this when we have feature flighting and can demonstrate toggling between
 * experiences to understand performance deltas.
 */
export function CreateTemplatesTabs2() {
  return (
    <TabList size="small" className={styles.pivotSet} defaultSelectedValue="Recommended">
      <Tab value="Recommended">Recommended</Tab>
      <Tab value="Resumes">Resumes</Tab>
      <Tab value="Invoices">Invoices</Tab>
      <Tab value="Paper">Paper and reports</Tab>
      <Tab value="Flyers">Flyers</Tab>
      <Tab value="Meeting">Meeting notes</Tab>
    </TabList>
  );
}
