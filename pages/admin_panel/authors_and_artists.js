import { useState } from 'react';

import DataTable from '../../components/AdminPanel/DataTable';

import { server } from '../../config/index.js';
import styles from '../../styles/admin_panel/article.module.css';

export default function AdminPanelAuthorsAndArtists({ authors, artists }) {
  const authorsMaxID = authors.length
    ? Math.max.apply(
        null,
        authors.map(author => author.id)
      )
    : 0;
  const artistsMaxID = artists.length
    ? Math.max.apply(
        null,
        artists.map(artist => artist.id)
      )
    : 0;
  console.log(Math.max([1, 2, 3]));
  const [authorAddData, setAuthorAddData] = useState({
    _id: null,
    id: null,
    name: null,
  });
  const [artistAddData, setArtistAddData] = useState({
    _id: null,
    id: null,
    name: null,
  });
  const [authorEditData, setAuthorEditData] = useState({
    _id: null,
    id: null,
    name: null,
  });
  const [artistEditData, setArtistEditData] = useState({
    _id: null,
    id: null,
    name: null,
  });
  const [authorRemove_ID, setAuthorRemove_ID] = useState(null);
  const [artistRemove_ID, setArtistRemove_ID] = useState(null);
  const addToDatabase = async () => {
    let data;
    let response;

    // fields check
    if (authorAddData.name) {
      // data structure
      data = { id: authorsMaxID + 1, name: authorAddData.name };
      // save the data
      response = await fetch('/api/authors', {
        method: 'POST',
        body: JSON.stringify(data),
      });
    } else if (artistAddData.name) {
      // data structure
      data = { id: artistsMaxID + 1, name: artistAddData.name };
      // save the data
      response = await fetch('/api/artists', {
        method: 'POST',
        body: JSON.stringify(data),
      });
    } else if (!authorAddData.name && !artistAddData.name) {
      return false;
    }

    // get the data
    let resJSON = await response.json();

    if (resJSON.success) {
      // reset the fields
      setAuthorAddData({ _id: null, id: null, name: null });
      setArtistAddData({ _id: null, id: null, name: null });
      return alert(resJSON.message);
    } else {
      // set the error
      return alert(resJSON.message);
    }
  };
  const editToDatabase = async () => {
    let data;
    let response;

    // fields check
    if (authorEditData.name) {
      // data structure
      data = { _id: authorEditData._id, name: authorEditData.name };
      // save the data
      response = await fetch('/api/authors', {
        method: 'PUT',
        body: JSON.stringify(data),
      });
    } else if (artistEditData.name) {
      // data structure
      data = { _id: artistEditData._id, name: artistEditData.name };
      // save the data
      response = await fetch('/api/artists', {
        method: 'PUT',
        body: JSON.stringify(data),
      });
    } else if (!authorEditData.name && !artistEditData.name) {
      return false;
    }

    // get the data
    let resJSON = await response.json();

    if (resJSON.success) {
      // reset the fields
      setAuthorEditData({ _id: null, id: null, name: null });
      setArtistEditData({ _id: null, id: null, name: null });
      return alert(resJSON.message);
    } else {
      // set the error
      return alert(resJSON.message);
    }
  };
  const removeFromDatabase = async () => {
    let data;
    let response;

    // fields check
    if (authorRemove_ID) {
      // data structure
      data = authorRemove_ID;
      // save the data
      response = await fetch('/api/authors', {
        method: 'DELETE',
        body: data,
      });
    } else if (artistRemove_ID) {
      // data structure
      data = artistRemove_ID;
      // save the data
      response = await fetch('/api/artists', {
        method: 'DELETE',
        body: data,
      });
    } else if (!authorRemove_ID && !artistRemove_ID) {
      return false;
    }

    // get the data
    let resJSON = await response.json();

    setAuthorRemove_ID(null);
    setArtistRemove_ID(null);

    if (resJSON.success) {
      // reset the fields
      return alert(resJSON.message);
    } else {
      // set the error
      return alert(resJSON.message);
    }
  };
  return (
    <div className={styles.container} style={{ alignItems: 'center' }}>
      <DataTable
        data={authors}
        pos="right"
        addData={authorAddData}
        setAddData={val => setAuthorAddData(val)}
        editData={authorEditData}
        setEditData={val => setAuthorEditData(val)}
        setRemove_ID={val => setAuthorRemove_ID(val)}
        addToDatabase={addToDatabase}
        editToDatabase={editToDatabase}
        removeFromDatabase={removeFromDatabase}
      >
        <div>
          <h4 style={{ width: 70 }}>Authors</h4>
          <p>
            We recommend you to prepare the data before any new data insertion.
            Every single data prioritized which is meant to be author can
            further be used in many more cases.
          </p>
        </div>
      </DataTable>
      <DataTable
        data={artists}
        pos="left"
        addData={artistAddData}
        setAddData={val => setArtistAddData(val)}
        editData={artistEditData}
        setEditData={val => setArtistEditData(val)}
        setRemove_ID={val => setArtistRemove_ID(val)}
        addToDatabase={addToDatabase}
        editToDatabase={editToDatabase}
        removeFromDatabase={removeFromDatabase}
      >
        <div>
          <h4 style={{ width: 70 }}>Artists</h4>
          <p>
            As we mentioned early, the data preparation is highly recommended
            before any new data insertion to prevent data uncertainty. Only the
            data listed can be used in future cases for artist.
          </p>
        </div>
      </DataTable>
    </div>
  );
}
export async function getServerSideProps() {
  // requests authors from api
  let authorsResponse = await fetch(`${server}/api/authors`);

  // extract the authors data
  let authorsData = await authorsResponse.json();

  // requests artists from api
  let artistsResponse = await fetch(`${server}/api/artists`);

  // extract the artists data
  let artistsData = await artistsResponse.json();

  return {
    props: {
      authors: [], // authorsData.message,
      artists: [], // artistsData.message,
    },
  };
}
