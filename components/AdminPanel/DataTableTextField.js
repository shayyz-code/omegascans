import styles from '../../styles/components/DataTable.module.css';

export default function DataTableTextField({
  data,
  setData,
  setTextFieldShown,
  toDatabase,
}) {
  const onCancel = () => {
    setData({ _id: null, id: null, name: null });
    setTextFieldShown(false);
  };

  const onSet = () => {
    // Database set
    toDatabase();
    setTextFieldShown(false);
  };

  return (
    <div className={styles.textFieldContainer}>
      <label htmlFor="textInput">Text input:</label>
      <input
        id="textInput"
        type="text"
        value={data.name}
        placeholder="Type here"
        onChange={e => setData({ ...data, name: e.target.value })}
      />
      <button onClick={onCancel}>Cancel</button>
      <button className={styles.btnSet} onClick={onSet}>
        Set
      </button>
    </div>
  );
}
