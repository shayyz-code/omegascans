import MobileNavbar from '../MobileNavbar';

export default function UserMobileNavbar() {
  const links = {
    Content: ['manga_list'],
  };

  return <MobileNavbar title="OmegaScans" links={links} />;
}
