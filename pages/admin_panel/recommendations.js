import DataTable from '../../components/AdminPanel/DataTable';

import styles from '../../styles/admin_panel/article.module.css';

export default function Recommendations() {
  return (
    <div className={styles.container} style={{ alignItems: 'center' }}>
      <DataTable getData="recommendations" pos="right">
        <div>
          <h4 style={{ width: 150 }}>Recommendations</h4>
          <p>
            Value column is for the post id. Which means, you must provide the
            post id, instead of directly giving the post{`\'s`} title itself.
            This is not how it works. In the case, once the valid data required
            is provided, the rest data (post title) will automatically show up.
            CC: There is nothing to do with the ID column;
          </p>
        </div>
      </DataTable>
    </div>
  );
}
