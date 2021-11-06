import Manga from '../../../../components/MangaList/Manga';
import { server } from '../../../../config/index';

import styles from '../../../../styles/admin_panel/article.module.css';

export default function MangaChapter({ post, chapters }) {
  return (
    <div className={styles.container}>
      <Manga data={{ ...post, chapters }} />
    </div>
  );
}

export async function getServerSideProps(ctx) {
  let { pid } = ctx.query;
  // get the current environment

  // requests posts from api
  let postResponse = await fetch(`${server}/api/manga_list/${pid}`);

  // extract the post data
  let postData = await postResponse.json();

  // gets post ID as fcid from post data
  let fcid = postData.message._id;

  // requests chapters with forChapter ID
  let chaptersResponse = await fetch(`${server}/api/chapters/for/${fcid}`);

  // extract the chapter data
  let chaptersData = await chaptersResponse.json();

  return {
    props: {
      post: postData['message'],
      chapters: chaptersData['message'],
    },
  };
}
