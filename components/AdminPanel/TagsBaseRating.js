import { useState } from 'react';

import styles from '../../styles/components/DataTable.module.css';

export default function TagsBaseRating({ getData, pos, children }) {
  const [data, setData] = useState(5);
  const abr = val => {
    if (data === val) return styles.activeBaseRating;
    else if (data !== val) return styles.baseRating;
  };
  const handleSet = btnVal => {
    // Database save()
    setData(btnVal);
  };
  return (
    <div className={styles.container}>
      {pos === 'right' && children}
      <ul className={styles.table}>
        <div className={styles.brBtnContainer}>
          <button className={abr(5)} onClick={() => handleSet(5)}>
            Set BR to 5.0
          </button>
          <button className={abr(10)} onClick={() => handleSet(10)}>
            Set BR to 10.0
          </button>
        </div>
      </ul>
      {pos === 'left' && children}
    </div>
  );
}
