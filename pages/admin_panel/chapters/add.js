import styles from '../../../styles/admin_panel/article.module.css';
import { server } from '../../../config';
import Link from 'next/link';

import { useState } from 'react';
import AdminPanelChapter from '../../../components/AdminPanel/AdminPanelChapter';

export default function AddChapter({ posts }) {
  const [message, setMessage] = useState('');
  const handleSubmitToDatabase = async chapterAddData => {
    // save the post
    let response = await fetch(`${server}/api/chapters`, {
      method: 'POST',
      body: JSON.stringify(chapterAddData),
    });

    // get the data
    let data = await response.json();

    if (data.success) {
      return setMessage(`Database ` + data.message);
    } else {
      return setMessage(`Database ` + data.message);
    }
  };
  return (
    <div
      className={styles.container}
      style={{ alignItems: 'center', color: '#fff' }}
    >
      <Link href="/admin_panel/chapters">
        <a style={{ color: 'blue' }}>Go back</a>
      </Link>
      <AdminPanelChapter
        posts={posts}
        handleSubmitToDatabase={handleSubmitToDatabase}
      />
      {message}
    </div>
  );
}

export async function getServerSideProps() {
  // requests posts from api
  let response = await fetch(`${server}/api/manga_list/brief`);

  // extract the data
  let data = await response.json();

  return {
    props: {
      posts: data['message'],
    },
  };
}
