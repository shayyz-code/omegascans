import { useState, useEffect } from 'react';
import { server } from '../../config';

import styles from '../../styles/components/MangaList/List.module.css';

import Element from './Element';
import SkeletonForEachElement from './SkeletonForEachElement';

export default function List(props) {
  const [data, setData] = useState(props.data);

  useEffect(() => {
    fetch(`${server}/api/manga_list`)
      .then(res => res.json())
      .then(jsonData => setData(jsonData.message))
      .catch(err => console.error(err));
  });

  const SkeletonList = [];
  for (let i = 0; i < 14; i++) {
    SkeletonList.push(<SkeletonForEachElement key={i} theme="dark" />);
  }
  return (
    <div className={styles.container}>
      {data &&
        data.length > 0 &&
        data.slice(0, 10).map(post => <Element key={post.id} data={post} />)}
      {(!data || data.length === 0) && SkeletonList}
    </div>
  );
}
