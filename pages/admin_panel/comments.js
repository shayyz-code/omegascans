import CommentsDataTable from '../../components/AdminPanel/CommentsDataTable';

import styles from '../../styles/admin_panel/article.module.css';

export default function Comments() {
  return (
    <div className={styles.container} style={{ alignItems: 'center' }}>
      <CommentsDataTable>
        <div>
          <h4 style={{ width: 80 }}>Comments</h4>
          <p>
            All comments across this site can be found at one place. You can
            also remove or edit some unwanted comments.
          </p>
        </div>
      </CommentsDataTable>
    </div>
  );
}
