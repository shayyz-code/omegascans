import styles from '../../../styles/admin_panel/article.module.css';

import List from '../../../components/MangaList/List';
import PageSwitcher from '../../../components/MangaList/PageSwitcher';
import SearchBar from '../../../components/MangaList/SearchBar';
import FilterBar from '../../../components/MangaList/FilterBar';
import MangaAddBtn from '../../../components/MangaList/MangaAddBtn';

export default function AdminPanelMangaList() {
  return (
    <div className={styles.container}>
      <SearchBar />
      <FilterBar />
      <List />
      <PageSwitcher data={9} />
      <MangaAddBtn />
    </div>
  );
}
