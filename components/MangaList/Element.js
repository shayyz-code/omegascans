import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';

import { server } from '../../config';
import styles from '../../styles/components/MangaList/List.module.css';

export default function Element({ data }) {
  const router = useRouter();
  const pathname = router.asPath;

  const getHref = _id => `${pathname}/${_id}`;

  const handleDelete = async _id => {
    let result = confirm('Please confirm to delete.');
    if (!result) return null;

    let res = await fetch(`${server}/api/manga_list`, {
      method: 'DELETE',
      body: _id,
    });
    let jsonData = await res.json();
    alert(jsonData.message);
  };

  return (
    <div className={styles.element}>
      {pathname.split('/').includes('admin_panel') && (
        <div className={styles.delete} onClick={() => handleDelete(data._id)}>
          <FontAwesomeIcon icon={faTimesCircle} />
        </div>
      )}
      <div className={styles.posterImg}>
        <Image
          src={data.profile || 'https://via.placeholder.com/600/92c952'}
          alt="Poster"
          layout="fill"
        />
      </div>
      <div className={styles.rating}>{data.rating}</div>
      <Link href={getHref(data._id)}>
        <a>
          <h4>{data.title}</h4>
        </a>
      </Link>
    </div>
  );
}
