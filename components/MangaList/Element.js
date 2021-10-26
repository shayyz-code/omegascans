import Image from 'next/image';
import Link from 'next/link';

import styles from '../../styles/components/MangaList/List.module.css';

export default function Element({ data }) {
  return (
    <div className={styles.element}>
      <div className={styles.posterImg}>
        <Image
          src={data.profile || 'https://via.placeholder.com/600/92c952'}
          alt="Poster"
          layout="fill"
        />
      </div>
      <div className={styles.rating}>{data.rating}</div>
      <Link href={`/manga_list/${data._id}`}>
        <a>
          <h4>{data.title}</h4>
        </a>
      </Link>
    </div>
  );
}
