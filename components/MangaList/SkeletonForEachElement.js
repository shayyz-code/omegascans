import SkeletonElement from '../SkeletonElement';

import styles1 from '../../styles/components/MangaList/List.module.css';
import styles2 from '../../styles/components/Skeleton.module.css';

export default function SkeletonForEachElement({ theme }) {
  return (
    <div
      className={`${styles1.skeletonForEachElement} ${styles2.skeletonWrapper} ${styles2[theme]}`}
    >
      <SkeletonElement type="thumbnail" />
      <SkeletonElement type="title" />
      <div className={styles2.shimmerWrapper}>
        <div className={styles2.shimmer}></div>
      </div>
    </div>
  );
}
