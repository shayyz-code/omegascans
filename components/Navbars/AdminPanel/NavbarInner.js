import Link from 'next/link';
import { useRouter } from 'next/dist/client/router';

import { cvtLink2Name } from '../../PathIndicator';

export default function NavbarInner({ heading, links }) {
  let subPathname = useRouter().pathname.slice(13);

  const linkNames = cvtLink2Name(links);

  return (
    <ul>
      <h2>{heading}</h2>
      {links.map((link, i) => (
        <li key={i}>
          <Link href={`/admin_panel/${link}`}>
            <a>
              {linkNames[i]}
              {subPathname === link && <span></span>}
            </a>
          </Link>
        </li>
      ))}
    </ul>
  );
}
