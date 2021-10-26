import { useState } from 'react';
import firebaseApp from '../../backend/firebase';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
// import s3, {storage_config} from '../../backend/storage';
// import multer from 'multer';
// import multerS3 from 'multer-s3';

export default function AdminPanelManga({ handleSubmitToDatabase }) {
  const [title, setTitle] = useState('');
  const [profile, setProfile] = useState('');
  const [cover, setCover] = useState('');
  const [rating, setRating] = useState('');
  const [status, setStatus] = useState('');
  const [review, setReview] = useState('');
  const [released, setreleased] = useState('');
  const [author, setAuthor] = useState('');
  const [artist, setArtist] = useState('');
  const [serialization, setSerialization] = useState('');
  const [postedBy, setPostedBy] = useState('');
  const [postedOn, setPostedOn] = useState('');
  const [lastUpdatedOn, setLastUpdatedOn] = useState('');
  const [genres, setGenres] = useState('');
  const [imgs, setImgs] = useState([]);
  const [chapters, setChapters] = useState([]);
  const [comments, setComments] = useState([]);

  const handleImgChg = e => {
    if (e.target.files && e.target.files[0]) {
      const blob = e.target.files[0];
      const imgRef = ref(getStorage(firebaseApp), `images/${blob.name}`);
      uploadBytes(imgRef, blob).then(snapshot => {
        getDownloadURL(imgRef)
          .then(url => {
            setImgs([...imgs, url]);
            alert('success');
          })
          .catch(err => alert(err));
      });
      // const params = {
      //   Body: blob,
      //   Bucket: `${storage_config.bucket_name}`,
      //   Key: blob.name,
      // };
      // // send the file to spaces
      // s3.putObject(params)
      //   .on('build', request => {
      //     request.httpRequest.headers.Host = `${storage_config.do_spaces}`;
      //     request.httpRequest.headers['Content-Length'] = blob.size;
      //     request.httpRequest.headers['Content-Type'] = blob.type;
      //     request.httpRequest.headers['x-amz-acl'] = 'public-read';
      //   })
      //   .send(err => {
      //     if (err) alert(err);
      //     else {
      //       // If there is no error updating the editor with the imageUrl
      //       setImgs([...imgs, blob.name]);
      //     }
      //   });
    }
  };
  const handleProfileChg = e => {
    if (e.target.files && e.target.files[0]) {
      const blob = e.target.files[0];
      const imgRef = ref(getStorage(firebaseApp), `images/${blob.name}`);
      uploadBytes(imgRef, blob).then(snapshot => {
        getDownloadURL(imgRef)
          .then(url => {
            setProfile(url);
            alert('success');
          })
          .catch(err => alert(err));
      });
      // const params = {
      //   Body: blob,
      //   Bucket: storage_config.bucket_name,
      //   Key: blob.name,
      // };
      // // send the file to spaces
      // s3.putObject(params)
      //   .on('build', request => {
      //     request.httpRequest.headers.Host = `${storage_config.do_spaces}`;
      //     request.httpRequest.headers['Content-Length'] = blob.size;
      //     request.httpRequest.headers['Content-Type'] = blob.type;
      //     request.httpRequest.headers['x-amz-acl'] = 'public-read';
      //   })
      //   .send(err => {
      //     if (err) alert(err);
      //     else {
      //       // If there is no error updating the editor with the imageUrl
      //       setProfile(blob.name);
      //     }
      //   });
    }
  };
  const handleCoverChg = e => {
    if (e.target.files && e.target.files[0]) {
      const blob = e.target.files[0];
      const imgRef = ref(getStorage(firebaseApp), `images/${blob.name}`);
      uploadBytes(imgRef, blob).then(snapshot => {
        getDownloadURL(imgRef)
          .then(url => {
            setCover(url);
            alert('success');
          })
          .catch(err => alert(err));
      });
      // const params = {
      //   Body: blob,
      //   Bucket: storage_config.bucket_name,
      //   Key: blob.name,
      // };
      // // send the file to spaces
      // s3.putObject(params)
      //   .on('build', request => {
      //     request.httpRequest.headers.Host = `${storage_config.do_spaces}`;
      //     request.httpRequest.headers['Content-Length'] = blob.size;
      //     request.httpRequest.headers['Content-Type'] = blob.type;
      //     request.httpRequest.headers['x-amz-acl'] = 'public-read';
      //   })
      //   .send(err => {
      //     if (err) alert(err);
      //     else {
      //       // If there is no error updating the editor with the imageUrl
      //       setCover(blob.name);
      //     }
      //   });
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    const datetime = String(new Date()).split(' ');
    setPostedOn(datetime);
    setLastUpdatedOn(datetime);
    setComments([]);
    handleSubmitToDatabase({
      title,
      profile,
      cover,
      rating,
      status,
      review,
      released,
      author,
      artist,
      serialization,
      postedBy,
      postedOn,
      lastUpdatedOn,
      genres,
      imgs,
      chapters,
      comments,
    });
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
      <label htmlFor="profile">Profile: </label>
      {profile}
      <input type="file" id="profile" onChange={handleProfileChg} />
      <label htmlFor="cover">Cover: </label>
      {cover}
      <input type="file" onChange={handleCoverChg} />
      <input
        type="text"
        placeholder="Rating"
        onChange={e => setRating(e.target.value)}
        value={rating}
      />
      <input
        type="text"
        placeholder="Status"
        onChange={e => setStatus(e.target.value)}
        value={status}
      />
      <textarea placeholder="Review" onChange={e => setReview(e.target.value)}>
        {review}
      </textarea>
      <input
        type="text"
        placeholder="Released"
        onChange={e => setreleased(e.target.value)}
        value={released}
      />
      <input
        type="text"
        placeholder="Author"
        onChange={e => setAuthor(e.target.value)}
        value={author}
      />
      <input
        type="text"
        placeholder="Artist"
        onChange={e => setArtist(e.target.value)}
        value={artist}
      />
      <input
        type="text"
        placeholder="Serialization"
        onChange={e => setSerialization(e.target.value)}
        value={serialization}
      />
      <input
        type="text"
        placeholder="Posted by"
        onChange={e => setPostedBy(e.target.value)}
        value={postedBy}
      />
      <input
        type="text"
        placeholder="Genres"
        onChange={e => setGenres(e.target.value)}
        value={genres}
      />
      {imgs && imgs.length && imgs.map(img => `${img}`)}
      <input type="file" accept="image/*" onChange={handleImgChg} />
      {/* <input
        type="text"
        placeholder="Chapters"
        onChange={e => setChapters(e.target.value)}
        value={chapters}
      /> */}
      <button>Post</button>
    </form>
  );
}
