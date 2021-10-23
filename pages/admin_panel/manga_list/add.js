import styles from '../../../styles/admin_panel/article.module.css';

import Link from 'next/link';

import { useState } from 'react';
import AdminPanelManga from '../../../components/AdminPanel/AdminPanelManga';

export default function AddPost() {
  const [postAddData, setPostAddData] = useState({});
  const [message, setMessage] = useState('');
  const handleSubmitToDatabase = async () => {
    // save the post
    let response = await fetch('/api/manga_list', {
      method: 'POST',
      body: JSON.stringify(postAddData),
    });

    // get the data
    let data = await response.json();

    if (data.success) {
      return setMessage(data.message);
    } else {
      return setMessage(data.message);
    }
  };
  return (
    <div className={styles.container} style={{ alignItems: 'center' }}>
      <Link href="/admin_panel/manga_list">
        <a style={{ color: 'blue' }}>Go back</a>
      </Link>
      <AdminPanelManga
        setPostAddData={data => setPostAddData(data)}
        handleSubmitToDatabase={handleSubmitToDatabase}
      />
      {message}
    </div>
  );
}
