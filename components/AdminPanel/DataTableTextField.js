import { useState } from 'react';

import styles from '../../styles/components/DataTable.module.css';

export default function DataTableTextField({ data, setTextFieldShown }) {
  const { id, name } = data;
  const [valueName, setValueName] = useState(name);

  const onCancel = () => {
    setTextFieldShown(false);
  };

  const onSet = () => {
    // Database set

    setTextFieldShown(false);
  };

  return (
    <div className={styles.textFieldContainer}>
      <label htmlFor="textInput">Text input:</label>
      <input
        id="textInput"
        type="text"
        value={valueName}
        placeholder="Type here"
        onChange={e => setValueName(e.target.value)}
      />
      <button onClick={onCancel}>Cancel</button>
      <button className={styles.btnSet} onClick={onSet}>
        Set
      </button>
    </div>
  );
}
