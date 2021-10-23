import DataTable from '../../components/AdminPanel/DataTable';
import TagsBaseRating from '../../components/AdminPanel/TagsBaseRating';

import styles from '../../styles/admin_panel/article.module.css';

export default function Tags() {
  return (
    <div className={styles.container} style={{ alignItems: 'center' }}>
      <TagsBaseRating getData="baseRating" pos="right">
        <div>
          <h4 style={{ width: 165 }}>Base Rating (BR)</h4>
          <p>Base Rating can also be customized as you wish.</p>
        </div>
      </TagsBaseRating>
      <DataTable getData="status" pos="left">
        <div>
          <h4 style={{ width: 60 }}>Status</h4>
          <p>
            You can explicitly manage the status for use in a unique post or
            many more posts here. A common sample for this would be On-Going.
          </p>
        </div>
      </DataTable>
      <DataTable getData="types" pos="right">
        <div>
          <h4 style={{ width: 50 }}>Types</h4>
          <p>Specify the types to dispatch across the whole data store.</p>
        </div>
      </DataTable>
    </div>
  );
}
