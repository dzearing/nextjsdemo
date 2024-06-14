import React, { type InputHTMLAttributes } from 'react';
import styles from './SearchBox.module.css';
import { SearchIcon } from '../icons/SearchIcon';
import { ClearIcon } from '../icons/ClearIcon';
import cx from 'classnames';
import { SearchBox as FUISearchBox } from '@fluentui/react-search';

/** Use the fluent searchbox. */
export const SearchBox = (props: InputHTMLAttributes<HTMLInputElement>) => (
  <FUISearchBox {...(props as any)} className={cx(styles.root2, props.className)} />
);

/**
 * Use a custom one that matches design. (Note this is included here but unused by default. This would
 * be a great case for feature flighting demo.
 */
export const SearchBox2 = (props: InputHTMLAttributes<HTMLInputElement>) => {
  const [value, setValue] = React.useState('');

  return (
    <div role="search" className={cx(styles.root, props.className)}>
      <SearchIcon className={styles.searchIcon} />
      <input
        className={styles.searchInput}
        type="search"
        aria-autocomplete="list"
        aria-controls="ms-searchux-popup-0"
        accessKey="S"
        spellCheck="false"
        autoComplete="off"
        autoCorrect="false"
        data-nav="true"
        data-tab="true"
        maxLength={500}
        aria-expanded="false"
        placeholder={props.placeholder}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button className={styles.searchButton} disabled={!value} style={{ visibility: value ? 'visible' : 'hidden' }}>
        <ClearIcon className={styles.searchClearIcon} />
      </button>
    </div>
  );
};
