import Link from 'next/link';
import { useRouter } from 'next/router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { cvtLink2Name } from '../PathIndicator';

import { LinksAndIcons } from './LinksAndIcons';

import styles from '../../styles/components/Navbars/MobileNavbar.module.css';

export default function MobileNavbarInner({ heading, links, isOpen }) {
  let { pathname } = useRouter();
  let pathArray = pathname.split('/');

  const linkNames = cvtLink2Name(links);

  return (
    <ul>
      <h2>{heading}</h2>
      {links.map((link, i) => (
        <li key={i}>
          <Link href={`/admin_panel/${link}`}>
            <a>
              <div>{linkNames[i]}</div>
              {!isOpen && (
                <div
                  className={`${styles.icon} ${
                    pathArray.includes(link) && styles.iconActive
                  }`}
                >
                  <FontAwesomeIcon icon={LinksAndIcons[link]} />
                </div>
              )}
              {pathArray.includes(link) && <span></span>}
            </a>
          </Link>
        </li>
      ))}
    </ul>
  );
}
