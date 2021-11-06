import styles from '../../styles/components/MangaList/List.module.css';

import Element from './Element';
import SkeletonForEachElement from './SkeletonForEachElement';

export default function List({ data }) {
  const SkeletonList = [];
  for (let i = 0; i < 14; i++) {
    SkeletonList.push(<SkeletonForEachElement key={i} theme="dark" />);
  }
  return (
    <div className={styles.container}>
      {data &&
        data.length > 0 &&
        data.map(post => <Element key={post._id} data={post} />)}
      {(!data || data.length === 0) && SkeletonList}
    </div>
  );
}
