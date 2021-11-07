import MobileNavbar from '../MobileNavbar';

export default function UserNavbar() {
  const links = {
    Content: ['manga_list'],
  };

  return <MobileNavbar title="OmegaScans" links={links} />;
}
