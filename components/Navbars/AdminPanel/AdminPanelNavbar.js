import Navbar from '../Navbar';

export default function AdminPanelNavbar() {
  const links = {
    Content: [
      'manga_list',
      'chapters',
      'authors_and_artists',
      'tags',
      'genres',
      'admins',
      'recommendations',
      'comments',
      'advertisement',
    ],
    Settings: ['general', 'advanced'],
  };

  return <Navbar title="Admin Panel" links={links} />;
}
