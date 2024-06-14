import React from 'react';
import styles from './DocumentsListItem.module.css';
import cx from 'classnames';
import type { Item } from './types/Item';
import { WordIcon } from '../icons/WordIcon';
import type { ItemCell } from './types/ItemCell';

export type DocumentsListItemProps = React.AllHTMLAttributes<HTMLElement> & {
  item: Item;
};

export function DocumentsListItem(props: DocumentsListItemProps) {
  const { cells } = props.item;

  return (
    <div className={cx(styles.root, props.className)}>
      {cells.map((cell, index) => (
        <DynamicCell key={index} cell={cell} index={index} />
      ))}
    </div>
  );
}

function DynamicCell({ cell, index }: { cell: ItemCell; index: number }) {
  if (cell.type === 'name') {
    return (
      <div key={index} className={cx(styles.cell, styles.cellName)}>
        <WordIcon className={styles.cellIcon} />
        <div className={styles.cellText}>{cell.text}</div>
        <div className={styles.cellSubText}>{cell.subText}</div>
      </div>
    );
  }

  return (
    <div key={index} className={styles.cell}>
      {cell.text}
    </div>
  );
}
