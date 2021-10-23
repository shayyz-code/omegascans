import styles from '../styles/components/Skeleton.module.css';

export default function SkeletonElement({ type, theme }) {
  const classes = `${styles.skeleton} ${styles[type]} ${styles[theme]}`;
  return <div className={classes}></div>;
}
