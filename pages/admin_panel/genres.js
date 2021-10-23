import DataTable from '../../components/AdminPanel/DataTable';

import styles from '../../styles/admin_panel/article.module.css';

export default function Genres() {
  return (
    <div className={styles.container} style={{ alignItems: 'center' }}>
      <DataTable getData="genres" pos="right">
        <div>
          <h4 style={{ width: 60 }}>Genres</h4>
          <p>
            Apart from other data tables, the data listed for genre is available
            for use in collective way.
          </p>
        </div>
      </DataTable>
    </div>
  );
}
