import { useState } from 'react';

import {
  faEdit,
  faTimesCircle,
  faPlusCircle,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from '../../styles/components/DataTable.module.css';
import DataTableTextField from './DataTableTextField';

export default function DataTable({ getData, pos, children }) {
  const data = [
    { id: 1, name: 'Mr. Arthor 1' },
    { id: 2, name: 'Mr. Arthor 2' },
    { id: 3, name: 'Mr. Arthor 3' },
    { id: 4, name: 'Mr. Arthor 4' },
  ];

  const [textFieldShown, setTextFieldShown] = useState(false);
  const [textFieldData, setTextFieldData] = useState({ id: null, name: null });
  const onEditAndAdd = data => {
    setTextFieldData(data);
    setTextFieldShown(true);
  };
  return (
    <div className={styles.container}>
      {pos === 'right' && children}
      <ul className={styles.table}>
        {textFieldShown && (
          <div className={styles.textFieldOutterContainer}>
            <DataTableTextField
              data={textFieldData}
              setTextFieldShown={val => setTextFieldShown(val)}
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
          data.map(({ id, name }, index) => (
            <li key={id} className={styles.tr}>
              <div className={styles.idNname}>
                <div className={styles.id}>{++index}</div>
                <div className={styles.id}>{id}</div>
                <div className={styles.name}>{name}</div>
              </div>
              <div className={styles.editNremove}>
                <div
                  className={styles.edit}
                  onClick={() => onEditAndAdd({ id, name })}
                >
                  <FontAwesomeIcon icon={faEdit} />
                </div>
                <div className={styles.remove}>
                  <FontAwesomeIcon icon={faTimesCircle} />
                </div>
              </div>
            </li>
          ))}
        <li className={styles.tr}>
          <div
            className={styles.add}
            onClick={() => onEditAndAdd({ id: null, name: null })}
          >
            add <FontAwesomeIcon icon={faPlusCircle} />
          </div>
        </li>
      </ul>
      {pos === 'left' && children}
    </div>
  );
}
