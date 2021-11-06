import { useState, useEffect } from 'react';
import { server } from '../../config';
import styles from '../../styles/admin_panel/article.module.css';

import List from '../../components/MangaList/List';
// import PageSwitcher from '../../components/MangaList/PageSwitcher';
import SearchBar from '../../components/MangaList/SearchBar';
import FilterBar from '../../components/MangaList/FilterBar';

export default function MangaList() {
  const [data, setData] = useState([]);
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
      {/* <PageSwitcher data={9} /> */}
    </div>
  );
}
