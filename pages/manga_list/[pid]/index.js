import Manga from '../../../components/MangaList/Manga';
import { server } from '../../../config/index.js';

import styles from '../../../styles/admin_panel/article.module.css';

export default function MangaPost({ post }) {
  return (
    <div className={styles.container}>
      <Manga data={post} />
    </div>
  );
}

export async function getServerSideProps(ctx) {
  let { pid } = ctx.query;
  // get the current environment

  // requests posts from api
  let response = await fetch(`${server}/api/manga_list/${pid}`);

  // extract the data
  let data = await response.json();

  return {
    props: {
      post: data['message'],
    },
  };
}
