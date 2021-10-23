import Image from 'next/image';

import styles from '../../styles/components/MangaList/List.module.css';

export default function Element({ data }) {
  return (
    <div className={styles.element}>
      <div className={styles.posterImg}>
        <Image
          src="https://via.placeholder.com/600/92c952"
          alt="Poster"
          layout="fill"
        />
      </div>
      <div className={styles.rating}>{data.rating}</div>
      <h4>{data.title}</h4>
    </div>
  );
}
