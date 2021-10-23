import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

import MainBtn from '../MainBtn';

import styles from '../../styles/components/MangaList/SearchBar.module.css';

export default function SearchBar() {
  return (
    <form>
      <div className={styles.container}>
        <input type="search" placeholder="Search" />
        <MainBtn w="35px" h="30px">
          <FontAwesomeIcon icon={faSearch} />
        </MainBtn>
      </div>
    </form>
  );
}
