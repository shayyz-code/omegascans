import { useState } from 'react';
// import firebaseApp from '../../backend/firebase';
// import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import s3, { storage_config } from '../../backend/storage';
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
  const [type, setType] = useState('');
  // const [imgs, setImgs] = useState([]);
  // const [chapters, setChapters] = useState([]);
  const [comments, setComments] = useState([]);

  // const handleImgsUp = e => {
  //   if (imgs) {
  //     imgs.forEach(img => {
  //       if (img) {
  //         const blob = img;
  //         const params = {
  //           Bucket: storage_config.bucket_name,
  //           Key: blob.name,
  //           Body: blob,
  //           ACL: 'public-read',
  //         };
  //         // send the file to spaces
  //         s3.putObject(params, err => {
  //           if (err) alert(err, err.stack);
  //           else {
  //             setImgs(null);
  //             setImgs(...imgs, `${storage_config.do_spaces}/${blob.name}`);
  //           }
  //         });
  //       }
  //     });
  //   }
  // };
  const handleProfileUp = async callback => {
    if (profile) {
      const blob = profile;
      const params = {
        Bucket: storage_config.bucket_name,
        Key: blob.name,
        Body: blob,
        ACL: 'public-read',
      };
      // send the file to spaces
      s3.putObject(params, err => {
        if (err) alert(err, err.stack);
        else {
          callback();
        }
      });
    }
  };
  const handleCoverUp = async callback => {
    if (cover) {
      const blob = cover;
      const params = {
        Bucket: storage_config.bucket_name,
        Key: blob.name,
        Body: blob,
        ACL: 'public-read',
      };
      // send the file to spaces
      s3.putObject(params, err => {
        if (err) alert(err, err.stack);
        else {
          callback();
        }
      });
    }
  };

  const handleSubmit = async e => {
    e.preventDefault();
    const datetime = String(new Date()).split(' ');
    // setPostedOn(datetime);
    // setLastUpdatedOn(datetime);
    setComments([]);
    handleProfileUp(() =>
      handleCoverUp(() =>
        handleSubmitToDatabase({
          title,
          profile: `${storage_config.do_spaces}/${profile.name}`,
          cover: `${storage_config.do_spaces}/${cover.name}`,
          rating,
          status,
          review,
          released,
          author,
          artist,
          serialization,
          postedby: postedBy,
          postedon: datetime,
          lastupdatedon: datetime,
          type,
          genres,
          comments,
        })
      )
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
      <label htmlFor="profile">Profile: </label>
      {profile.name}
      <input
        type="file"
        accept="image/*"
        id="profile"
        onChange={e => setProfile(e.target.files[0])}
      />
      <label htmlFor="cover">Cover: </label>
      {cover.name}
      <input
        type="file"
        accept="image/*"
        onChange={e => setCover(e.target.files[0])}
      />
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
      <textarea
        placeholder="Review"
        onChange={e => setReview(e.target.value)}
        value={review}
      />
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
        placeholder="Type"
        onChange={e => setType(e.target.value)}
        value={type}
      />
      <input
        type="text"
        placeholder="Genres"
        onChange={e => setGenres(e.target.value)}
        value={genres}
      />
      {/* {imgs && imgs.length && imgs.map(img => `${img.name}`)} */}
      {/* <input
        type="file"
        accept="image/*"
        multiple
        onChange={e => setImgs(Array.from(e.target.files))}
      /> */}
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
