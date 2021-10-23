import { useState, useEffect } from 'react';

import styles from '../../styles/components/MangaList/List.module.css';

import Element from './Element';
import SkeletonForEachElement from './SkeletonForEachElement';

export default function List(props) {
  const [data, setData] = useState(props.data);

  //   useEffect(() => {
  //     setTimeout(() => {
  //       fetch('https://jsonplaceholder.typicode.com/posts')
  //         .then(res => res.json())
  //         .then(jsonData => setData(jsonData))
  //         .catch(err => console.error(err));
  //     }, 5000);
  //   });

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
