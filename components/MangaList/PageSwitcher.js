import styles from '../../styles/components/MangaList/PageSwitcher.module.css';

export default function PageSwitcher({ data, setFrom, setTo }) {
  console.log(data);
  const PageSwitcherLink = (num, from, to) => (
    <div
      className={styles.link}
      key={num}
      onClick={() => {
        setFrom(from);
        setTo(to);
      }}
    >
      {num}
    </div>
  );
  const pageCount =
    data % 14 === 0 ? parseInt(data / 14) : parseInt(data / 14) + 1;
  const PageSwitcherLinkList = [];
  for (let i = 0; i < pageCount; i++) {
    PageSwitcherLinkList.push(
      PageSwitcherLink(i + 1, i === 0 ? 0 : 14 * i + 1, 14 * (i + 1))
    );
  }
  return <div className={styles.container}>{PageSwitcherLinkList}</div>;
}
