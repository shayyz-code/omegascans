import Link from 'next/link';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from '../../styles/admin_panel/MangaAddBtn.module.css';

export default function ChapterAddBtn() {
  return (
    <div className={styles.container}>
      <Link href={`/admin_panel/chapters/add`}>
        <a>
          <FontAwesomeIcon icon={faPlusCircle} />
          Add
        </a>
      </Link>
    </div>
  );
}
