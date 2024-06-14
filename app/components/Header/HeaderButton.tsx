import React, { type AllHTMLAttributes } from 'react';
import cx from 'classnames';
import styles from './Header.module.css';

export function HeaderButton(props: {
  icon: React.FunctionComponent<AllHTMLAttributes<Element>>;
  iconFilled: React.FunctionComponent<AllHTMLAttributes<Element>>;
}) {
  const { icon: Icon, iconFilled: FilledIcon, ...rest } = props;

  return (
    <button
      className={styles.headerButton}
      aria-haspopup="dialog"
      aria-expanded="false"
      type="button"
      role="button"
      aria-label="App launcher"
      title="App launcher"
      {...rest}
    >
      <Icon className={cx(styles.icon, styles.iconRested)} />
      <FilledIcon className={cx(styles.icon, styles.iconFilled)} alt="App launcher" role="presentation" />
    </button>
  );
}
