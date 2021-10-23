import { useState } from 'react';

export default function AdminPanelManga({
  setPostAddData,
  handleSubmitToDatabase,
}) {
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
  const [chapters, setChapters] = useState('');
  const [comments, setComments] = useState([]);

  const handleSubmit = e => {
    e.preventDefault();
    const datetime = String(new Date()).split(' ');
    setPostedOn(datetime);
    setLastUpdatedOn(datetime);
    setComments([]);
    setPostAddData({
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
      chapters,
      comments,
    });
    handleSubmitToDatabase();
  };
  return (
    <form
      onSubmit={handleSubmit}
      style={{ display: 'flex', flexDirection: 'column' }}
    >
      <input
        type="text"
        placeholder="Title"
        onChange={e => setTitle(e.target.value)}
        value={title}
      />
      <input
        type="text"
        placeholder="Profile"
        onChange={e => setProfile(e.target.value)}
        value={profile}
      />
      <input
        type="text"
        placeholder="Cover"
        onChange={e => setCover(e.target.value)}
        value={cover}
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
      <input
        type="text"
        placeholder="Chapters"
        onChange={e => setChapters(e.target.value)}
        value={chapters}
      />
      <button>Post</button>
    </form>
  );
}
