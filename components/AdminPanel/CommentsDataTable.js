import CommentsDataItem from './CommentsDataItem';

import styles from '../../styles/admin_panel/CommentsDataTable.module.css';

export default function CommentsDataTable({ children }) {
  const data = [
    {
      commentID: 1,
      by: { email: 'ffg@gmail.com', alias: 'jack' },
      content: 'nice.',
      postID: 1,
      datetime: String(new Date()).split(' '),
    },
    {
      commentID: 2,
      by: { email: 'fff@gmail.com', alias: 'john' },
      content: 'perfect!',
      postID: 2,
      datetime: String(new Date()).split(' '),
    },
  ];
  return (
    <div className={styles.container}>
      {children}
      <ul className={styles.table}>
        <li className={styles.tableTitle}>
          <div className={styles.dataLength}>{data && data.length}</div>comments
        </li>
        {data &&
          data.length > 0 &&
          data.map((dataItem, index) => {
            return <CommentsDataItem key={index} data={dataItem} />;
          })}
      </ul>
    </div>
  );
}
