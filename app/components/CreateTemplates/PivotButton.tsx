import React, { type ButtonHTMLAttributes } from 'react';
import cx from 'classnames';
import styles from './PivotButton.module.css';

type PivotButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & { selected?: boolean };
export const PivotButton = (props: PivotButtonProps) => (
  <button {...props} className={cx(props.className, styles.root, props.selected && styles.selected)} />
);
