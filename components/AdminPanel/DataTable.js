import { useState } from 'react';

import {
  faEdit,
  faTimesCircle,
  faPlusCircle,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from '../../styles/components/DataTable.module.css';
import DataTableTextField from './DataTableTextField';

export default function DataTable({
  data,
  pos,
  addData,
  setAddData,
  editData,
  setEditData,
  setRemove_ID,
  addToDatabase,
  editToDatabase,
  removeFromDatabase,
  children,
}) {
  const [addShown, setAddShown] = useState(false);
  const [editShown, setEditShown] = useState(false);
  const handleEdit = (_id, name) => {
    setAddShown(false);
    setEditShown(true);
    setEditData({ ...editData, _id: _id, name: name });
  };
  const handleAdd = () => {
    setEditShown(false);
    setAddShown(true);
    setAddData({ _id: null, id: null, name: null });
  };
  const handleRemove = _id => {
    setRemove_ID(_id);
    removeFromDatabase();
  };
  return (
    <div className={styles.container}>
      {pos === 'right' && children}
      <ul className={styles.table}>
        {editShown && !addShown && (
          <div className={styles.textFieldOutterContainer}>
            <DataTableTextField
              data={editData}
              setData={setEditData}
              setTextFieldShown={val => setEditShown(val)}
              toDatabase={editToDatabase}
            />
          </div>
        )}
        {addShown && !editShown && (
          <div className={styles.textFieldOutterContainer}>
            <DataTableTextField
              data={addData}
              setData={setAddData}
              setTextFieldShown={val => setAddShown(val)}
              toDatabase={addToDatabase}
            />
          </div>
        )}
        <li className={styles.th}>
          <div className={styles.id}>no</div>
          <div className={styles.id}>id</div>
          <div className={styles.name}>value</div>
        </li>
        {data &&
          data.length > 0 &&
          data.map(({ _id, id, name }, index) => (
            <li key={id} className={styles.tr}>
              <div className={styles.idNname}>
                <div className={styles.id}>{++index}</div>
                <div className={styles.id}>{id}</div>
                <div className={styles.name}>{name}</div>
              </div>
              <div className={styles.editNremove}>
                <div
                  className={styles.edit}
                  onClick={() => handleEdit(_id, name)}
                >
                  <FontAwesomeIcon icon={faEdit} />
                </div>
                <div
                  className={styles.remove}
                  onClick={() => handleRemove(_id)}
                >
                  <FontAwesomeIcon icon={faTimesCircle} />
                </div>
              </div>
            </li>
          ))}
        <li className={styles.tr}>
          <div className={styles.add} onClick={handleAdd}>
            add <FontAwesomeIcon icon={faPlusCircle} />
          </div>
        </li>
      </ul>
      {pos === 'left' && children}
    </div>
  );
}
