import { useState, useEffect } from 'react';
import { server } from '../../../config';

import styles from '../../../styles/admin_panel/article.module.css';

import ChapterList from '../../../components/MangaList/ChapterList';
// import SearchBar from '../../../components/MangaList/SearchBar';
// import FilterBar from '../../../components/MangaList/FilterBar';
import ChapterAddBtn from '../../../components/MangaList/ChapterAddBtn';
// import PageSwitcher from '../../../components/MangaList/PageSwitcher';

export default function AdminPanelMangaList() {
  const [data, setData] = useState([]);
  // const [fromNum, setFrom] = useState(0);
  // const [toNum, setTo] = useState(14);
  useEffect(() => {
    const fetchData = async () => {
      let res = await fetch(`${server}/api/chapters`);
      let jsonData = await res.json();
      if (jsonData.success) {
        setData(jsonData.message);
      } else {
        alert(jsonData.message);
      }
    };
    fetchData();
  }, []);
  return (
    <div className={styles.container}>
      {/* <SearchBar /> */}
      {/* <FilterBar /> */}
      <ChapterList data={data} />
      {/* <PageSwitcher
        data={data}
        setFrom={val => setFrom(val)}
        setTo={val => setTo(val)}
        fromNum={fromNum}
        toNum={toNum}
      /> */}
      <ChapterAddBtn />
    </div>
  );
}
