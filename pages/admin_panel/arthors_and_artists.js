import DataTable from '../../components/AdminPanel/DataTable';

import styles from '../../styles/admin_panel/article.module.css';

export default function AdminPanelArthorsAndArtists() {
  return (
    <div className={styles.container} style={{ alignItems: 'center' }}>
      <DataTable getData="arthors" pos="right">
        <div>
          <h4 style={{ width: 70 }}>Arthors</h4>
          <p>
            We recommend you to prepare the data before any new data insertion.
            Every single data prioritized which is meant to be arthor can
            further be used in many more cases.
          </p>
        </div>
      </DataTable>
      <DataTable getData="artists" pos="left">
        <div>
          <h4 style={{ width: 70 }}>Artists</h4>
          <p>
            As we mentioned early, the data preparation is highly recommended
            before any new data insertion to prevent data uncertainty. Only the
            data listed can be used in future cases for artist.
          </p>
        </div>
      </DataTable>
    </div>
  );
}
