import { useState } from 'react';
// import firebaseApp from '../../backend/firebase';
// import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import s3, { storage_config } from '../../backend/storage';
// import multer from 'multer';
// import multerS3 from 'multer-s3';

export default function AdminPanelChapter({ posts, handleSubmitToDatabase }) {
  const [title, setTitle] = useState('');
  const [chapterFor, setChapterFor] = useState(
    posts.length ? posts[0]._id : ''
  );
  const [released, setReleased] = useState('');
  const [postedBy, setPostedBy] = useState('');
  const [imgs, setImgs] = useState([]);

  const handleImgsUp = async callback => {
    if (imgs) {
      imgs.forEach(img => {
        if (img) {
          const blob = img;
          const params = {
            Bucket: storage_config.bucket_name,
            Key: `${chapterFor}/${blob.name}`,
            Body: blob,
            ACL: 'public-read',
          };
          // send the file to spaces
          s3.putObject(params, err => {
            if (err) alert(err, err.stack);
          });
        }
      });
      callback();
    }
  };

  const handleSubmit = async e => {
    e.preventDefault();
    const datetime = String(new Date()).split(' ');
    if (title && chapterFor && released && postedBy && imgs)
      handleImgsUp(() =>
        handleSubmitToDatabase({
          title,
          chapterFor,
          released,
          postedBy,
          postedOn: datetime,
          lastUpdatedOn: datetime,
          imgs: imgs.map(
            img => `${storage_config.do_spaces}/${chapterFor}/${img.name}`
          ),
        })
      );
  };
  return (
    <form
      onSubmit={handleSubmit}
      style={{ display: 'flex', flexDirection: 'column', color: '#fff' }}
    >
      <input
        type="text"
        placeholder="Title"
        onChange={e => setTitle(e.target.value)}
        value={title}
      />
      <select onChange={e => setChapterFor(e.target.value)} value={chapterFor}>
        {posts &&
          posts.length > 0 &&
          posts.map(post => (
            <option key={post._id} value={post._id}>
              {post.title}
            </option>
          ))}
      </select>
      <input
        type="text"
        placeholder="Released"
        onChange={e => setReleased(e.target.value)}
        value={released}
      />
      <input
        type="text"
        placeholder="Posted by"
        onChange={e => setPostedBy(e.target.value)}
        value={postedBy}
      />
      <ul>
        {imgs &&
          imgs.length &&
          imgs.map(img => <li key={img.name}>${img.name}</li>)}
      </ul>
      <input
        type="file"
        accept="image/*"
        multiple
        onChange={e => setImgs(Array.from(e.target.files))}
      />
      <button>Post</button>
    </form>
  );
}
