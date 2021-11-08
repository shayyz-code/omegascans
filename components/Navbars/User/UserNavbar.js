import Navbar from '../Navbar';

export default function UserNavbar() {
  const links = {
    Content: ['manga_list'],
  };

  return <Navbar title="OmegaScans" links={links} />;
}
