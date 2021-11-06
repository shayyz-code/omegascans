import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from '../../styles/components/MangaList/List.module.css';

// import Element from './Element';
import SkeletonForEachElement from './SkeletonForEachElement';

export default function ChapterList({ data }) {
  const router = useRouter();
  const pathname = router.asPath;

  const getHref = (p_id, c_id) => {
    const defaultHref = `/manga_list/${p_id}/chapter/${c_id}`;
    return pathname.split('/').includes('admin_panel')
      ? `/admin_panel${defaultHref}`
      : defaultHref;
  };
  console.log(getHref(1));

  const SkeletonList = [];
  for (let i = 0; i < 14; i++) {
    SkeletonList.push(<SkeletonForEachElement key={i} theme="dark" />);
  }
  return (
    <div className={styles.container}>
      {data && (
        <ul style={{ listStyle: 'none', margin: 0, padding: 0, color: '#bbb' }}>
          {data.length > 0 &&
            data.map(({ _id, title, chapterfor }) => (
              <li key={_id}>
                <Link href={getHref(chapterfor, _id)}>
                  <a>
                    <h4>{title}</h4>
                  </a>
                </Link>
              </li>
            ))}
        </ul>
      )}
      {(!data || data.length === 0) && SkeletonList}
    </div>
  );
}
