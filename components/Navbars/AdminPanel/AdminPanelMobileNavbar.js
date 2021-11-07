import MobileNavbar from '../MobileNavbar';

export default function AdminPanelMobileNavbar() {

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

  return (
    <MobileNavbar title="Admin Panel" links={links} />
  );
}
