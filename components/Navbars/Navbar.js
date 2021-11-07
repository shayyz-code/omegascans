import styles from '../../styles/components/Navbars/Navbar.module.css';

import NavbarInner from './NavbarInner';

export default function Navbar({ title, links }) {
  return (
    <div className={styles.navbar}>
      <h1>{title}</h1>
      {Object.keys(links).map((key, i) => (
        <NavbarInner key={i} heading={key} links={links[key]} />
      ))}
    </div>
  );
}
