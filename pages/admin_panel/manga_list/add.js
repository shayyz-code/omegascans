import styles from '../../../styles/admin_panel/article.module.css';
import { server } from '../../../config';
import Link from 'next/link';

import { useState } from 'react';
import AdminPanelManga from '../../../components/AdminPanel/AdminPanelManga';

export default function AddPost() {
  const [message, setMessage] = useState('');
  const handleSubmitToDatabase = async postAddData => {
    // save the post
    let response = await fetch(`${server}/api/manga_list`, {
      method: 'POST',
      body: JSON.stringify(postAddData),
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
      <Link href="/admin_panel/manga_list">
        <a style={{ color: 'blue' }}>Go back</a>
      </Link>
      <AdminPanelManga handleSubmitToDatabase={handleSubmitToDatabase} />
      {message}
    </div>
  );
}
