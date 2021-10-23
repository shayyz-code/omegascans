import { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTimesCircle } from '@fortawesome/free-solid-svg-icons';

import styles from '../../styles/admin_panel/CommentsDataTable.module.css';

export default function CommentsDataItem({ data }) {
  const { commentID, by, content, postID, datetime } = data;
  const [editOn, setEditOn] = useState(false);
  const [removeOn, setRemoveOn] = useState(false);
  const [contentEdit, setContentEdit] = useState(content);
  let postName = postID === 1 ? 'boku no pico' : 'reno';

  const handleRemoveCancel = () => {
    // Database
    setRemoveOn(false);
  };
  const handleRemoveConfirm = () => {
    // Database
    setRemoveOn(false);
  };

  return (
    <li>
      <div className={styles.header}>
        <div className={styles.byNcommentID}>
          <div className={styles.commentID}>{commentID}</div>
          <div className={styles.by}>{`${by.alias} (${by.email})`}</div>
        </div>
        <div className={styles.editNremove}>
          <div
            className={`${styles.edit} ${editOn && styles.editActive}`}
            onClick={() => setEditOn(!editOn)}
          >
            <FontAwesomeIcon icon={faEdit} />
          </div>
          <div className={styles.remove} onClick={() => setRemoveOn(!removeOn)}>
            <FontAwesomeIcon icon={faTimesCircle} />
          </div>
        </div>
      </div>
      <div className={styles.contentNsubmit}>
        <textarea
          className={styles.content}
          value={editOn ? contentEdit : content}
          readOnly={editOn ? false : true}
          onChange={e => setContentEdit(e.target.value)}
        />
        {editOn && <button>Submit</button>}
      </div>
      <div className={styles.postID}>{postName}</div>
      <div className={styles.datetime}>
        <div>{datetime[0]}</div>
        <div>{`${datetime[1]} ${datetime[2]}  ${datetime[3]}`}</div>
        <div>{datetime[4]}</div>
        <div>{datetime[5]}</div>
        <div>{`${datetime[6]} ${datetime[7]}`}</div>
      </div>
      {removeOn && (
        <div className={styles.removeConfirmContainer}>
          <div>Are you sure you want to remove this comment?</div>
          <div className={styles.removeConfirmBtnsContainer}>
            <button
              className={styles.removeConfirmCancel}
              onClick={handleRemoveCancel}
            >
              Cancel
            </button>
            <button
              className={styles.removeConfirmSubmit}
              onClick={handleRemoveConfirm}
            >
              Confirm
            </button>
          </div>
        </div>
      )}
    </li>
  );
}
