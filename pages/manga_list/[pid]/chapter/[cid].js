import Chapter from '../../../../components/MangaList/Chapter';
import { server } from '../../../../config/index';

import styles from '../../../../styles/admin_panel/article.module.css';

export default function MangaChapter({ chapter, relatedChapters }) {
  return (
    <div className={styles.container}>
      <Chapter data={{ ...chapter, relatedChapters }} />
    </div>
  );
}

export async function getServerSideProps(ctx) {
  let { cid } = ctx.query;

  // requests posts from api
  let response = await fetch(`${server}/api/chapters/${cid}`);

  // extract the data
  let data = await response.json();

  // destructs chapterFor prop from the data
  let { chapterfor } = data['message'];

  // requests chapters with forChapter ID
  let relatedChaptersResponse = await fetch(
    `${server}/api/chapters/for/${chapterfor}`
  );

  // extract the chapter data
  let relatedChaptersData = await relatedChaptersResponse.json();

  return {
    props: {
      chapter: data['message'],
      relatedChapters: relatedChaptersData['message'],
    },
  };
}
