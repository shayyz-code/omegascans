import { useState, useEffect } from 'react';
import { server } from '../../../config';

import styles from '../../../styles/admin_panel/article.module.css';

import List from '../../../components/MangaList/List';
// import SearchBar from '../../../components/MangaList/SearchBar';
// import FilterBar from '../../../components/MangaList/FilterBar';
import MangaAddBtn from '../../../components/MangaList/MangaAddBtn';
// import PageSwitcher from '../../../components/MangaList/PageSwitcher';

export default function AdminPanelMangaList() {
  const [data, setData] = useState([]);
  // const [fromNum, setFrom] = useState(0);
  // const [toNum, setTo] = useState(14);
  useEffect(() => {
    const fetchData = async () => {
      let res = await fetch(`${server}/api/manga_list/brief`);
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
      <List data={data} />
      {/* <PageSwitcher
        data={data}
        setFrom={val => setFrom(val)}
        setTo={val => setTo(val)}
        fromNum={fromNum}
        toNum={toNum}
      /> */}
      <MangaAddBtn />
    </div>
  );
}
