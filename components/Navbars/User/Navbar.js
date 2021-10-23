import styles from '../../../styles/components/Navbars/AdminPanel/Navbar.module.css';

import NavbarInner from '../AdminPanel/NavbarInner';

export default function Navbar() {
  const links = {
    content: ['manga_list'],
  };

  return (
    <div className={styles.navbar}>
      <h1>OmegaScans</h1>
      <NavbarInner heading="Content" links={links.content} />
    </div>
  );
}
