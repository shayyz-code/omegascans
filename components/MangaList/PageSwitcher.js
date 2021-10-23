import styles from '../../styles/components/MangaList/PageSwitcher.module.css';

export default function PageSwitcher({ data }) {
  const PageSwitcherLink = num => <div className={styles.link} key={num}>{num}</div>;
  const pageCount =
    data % 14 === 0 ? parseInt(data / 14) : parseInt(data / 14) + 1;
  const PageSwitcherLinkList = [];
  for (let i = 0; i < pageCount; i++) {
    PageSwitcherLinkList.push(PageSwitcherLink(i + 1));
  }
  return <div className={styles.container}>{PageSwitcherLinkList}</div>;
}
