'use client';

import React from 'react';
import cx from 'classnames';
import styles from './Header.module.css';
import { WaffleFilledIcon } from '../icons/WaffleFilledIcon';
import { WaffleIcon } from '../icons/WaffleIcon';
import { FlagIcon } from '../icons/FlagIcon';
import { FlagFilledIcon } from '../icons/FlagFilledIcon';
import { SettingsIcon } from '../icons/SettingsIcon';
import { SettingsFilledIcon } from '../icons/SettingsFilledIcon';
import { QuestionIcon } from '../icons/QuestionIcon';
import { QuestionFilledIcon } from '../icons/QuestionFilledIcon';
import { useScrolledDown } from './useScrolledDown';
import { ProfileButton } from './ProfileButton';
import { HeaderButton } from './HeaderButton';
import { SearchBox } from '../SearchBox/SearchBox';

export function Header(props: React.AllHTMLAttributes<Element>) {
  const isScrolled = useScrolledDown();

  return (
    <div className={cx(props.className, styles.root, isScrolled && styles.scrolled)}>
      <div className={styles.header} role="banner">
        <div className={styles.startCell}>
          <HeaderButton icon={WaffleIcon} iconFilled={WaffleFilledIcon} />
          <a
            href="https://df.word.cloud.microsoft/?access=OPGMicrosoft"
            role="link"
            aria-label="Go to Word"
            title="App brand icon"
            className={styles.productLink}
          >
            <img
              className={styles.productIcon}
              src="https://res-1.cdn.office.net/files/fabric-cdn-prod_20230815.002/assets/brand-icons/product/svg/word_32x1.svg"
              title="App brand icon"
            />
            <span className={styles.productTitle}>Word</span>
          </a>
        </div>
        <div className={styles.centerCell}>
          <SearchBox className={styles.searchBox} placeholder="Search everything" />
        </div>

        <div className={styles.endCell}>
          <HeaderButton icon={FlagIcon} iconFilled={FlagFilledIcon} />
          <HeaderButton icon={SettingsIcon} iconFilled={SettingsFilledIcon} />
          <HeaderButton icon={QuestionIcon} iconFilled={QuestionFilledIcon} />
          <ProfileButton />
        </div>
      </div>
      <div id="flexpane-overlay"></div>
    </div>
  );
}
