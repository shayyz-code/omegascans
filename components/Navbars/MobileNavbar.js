import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faAngleDoubleRight,
  faAngleDoubleLeft,
} from '@fortawesome/free-solid-svg-icons';

import styles from '../../styles/components/Navbars/MobileNavbar.module.css';

import MobileNavbarInner from './MobileNavbarInner';

export default function MobileNavbar({ title, links }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div
      className={styles.navbar}
      style={{ transform: `translateX(${!isOpen ? '-195px' : '0'})` }}
    >
      <h1>
        {title}
        <div className={styles.colIcon} onClick={() => setIsOpen(!isOpen)}>
          <FontAwesomeIcon
            icon={!isOpen ? faAngleDoubleRight : faAngleDoubleLeft}
          />
        </div>
      </h1>
      {Object.keys(links).map((key, i) => (
        <MobileNavbarInner
          key={i}
          heading={key}
          links={links[key]}
          isOpen={isOpen}
        />
      ))}
    </div>
  );
}
