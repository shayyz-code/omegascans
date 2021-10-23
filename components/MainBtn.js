import styles from '../styles/components/MainBtn.module.css';

export default function MainBtn({ w, h, children }) {
  return (
    <button className={styles.btn} style={{ width: w, height: h }}>
      {children}
    </button>
  );
}
