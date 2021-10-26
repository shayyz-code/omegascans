import styles from '../../../styles/components/Navbars/AdminPanel/Navbar.module.css';

import NavbarInner from './NavbarInner';

export default function Navbar() {
  const links = {
    content: [
      'manga_list',
      'authors_and_artists',
      'tags',
      'genres',
      'admins',
      'recommendations',
      'comments',
      'advertisement',
    ],
    settings: ['general', 'advanced'],
  };

  return (
    <div className={styles.navbar}>
      <h1>Admin Panel</h1>
      <NavbarInner heading="Content" links={links.content} />
      <NavbarInner heading="Settings" links={links.settings} />
    </div>
  );
}
