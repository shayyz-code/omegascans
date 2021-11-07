import { useRouter } from 'next/dist/client/router';
import Link from 'next/dist/client/link';

import styles from '../styles/components/PathIndicator.module.css';

export const cvtLink2Name = links =>
  links.map(link => {
    let splittedStr = link.split('_');
    let casedStr = splittedStr.map(
      word => word.charAt(0).toUpperCase() + word.slice(1)
    );
    if (casedStr.includes('And')) casedStr[casedStr.indexOf('And')] = '&';
    return casedStr.join(' ');
  });

export const cvtPathname2Link = pn => {
  const splittedStrArr = pn.split('/');
  splittedStrArr[0] = 'omegascans';
  return splittedStrArr;
};

export default function PathIndicator() {
  const path = useRouter().asPath;
  const { pid } = useRouter().query;

  const links = cvtPathname2Link(path);
  const linkNames = cvtLink2Name(links);

  if (linkNames[1] === 'Admin Panel') {
    linkNames.splice(1, 1);
    linkNames[1] = linkNames[1] + ' (Admin Panel)';
  }
  if (pid) {
    linkNames.pop();
    linkNames.push(pid);
  }
  return (
    <ul className={styles.container}>
      <li>
        <Link href={`/`}>
          <a>{linkNames[0]}</a>
        </Link>
      </li>
      {linkNames[1] && (
        <li>
          <Link href={`/admin_panel/${links[2]}`}>
            <a>{linkNames[1]}</a>
          </Link>
        </li>
      )}
      {linkNames[2] && (
        <li>
          <Link href={`/admin_panel/${links[2]}/${pid}`}>
            <a>{linkNames[2]}</a>
          </Link>
        </li>
      )}
    </ul>
  );
}
