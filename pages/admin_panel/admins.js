import DataTable from '../../components/AdminPanel/DataTable';

import styles from '../../styles/admin_panel/article.module.css';

export default function Admins() {
  return (
    <div className={styles.container} style={{ alignItems: 'center' }}>
      <DataTable getData="admins" pos="right">
        <div>
          <h4 style={{ width: 60 }}>Admins</h4>
          <p>
            The data preparation for admin is basically meant for post uploads.
            We are working on to extend one-account-per-admin feature. Then, you
            will find convenience in accessing and managing, for example, user
            comments and more.
          </p>
        </div>
      </DataTable>
    </div>
  );
}
