// const { connectToDatabase } = require('../../../backend/db');
const pool = require('../../../backend/db');
// const ObjectId = require('mongodb').ObjectId;

export default async function handler(req, res) {
  // switch the methods

  switch (req.method) {
    case 'GET': {
      return getPosts(req, res);
    }
    case 'POST': {
      return addPost(req, res);
    }
    case 'PUT': {
      return updatePost(req, res);
    }
    case 'DELETE': {
      return deletePost(req, res);
    }
  }
}

async function getPosts(req, res) {
  try {
    // connect to the database
    // let { db } = await connectToDatabase();

    // fetch the posts
    // let posts = await db.collection('manga_list').find({}).toArray();
    let posts = await pool.query('SELECT * FROM manga_list');

    // return the posts
    return res.json({
      message: JSON.parse(JSON.stringify(posts.rows)),
      success: true,
    });
  } catch (error) {
    // return the error
    return res.json({
      message: new Error(error).message,
      success: false,
    });
  }
}

async function addPost(req, res) {
  try {
    // connect to the database
    // let { db } = await connectToDatabase();

    // get post count
    // let count = await db.collection('manga_list').

    const reqBody = JSON.parse(req.body);
    const reqBodyAsArray = Object.keys(reqBody).map(key => reqBody[key]);
    // add the post
    // await db.collection('manga_list').insertOne(JSON.parse(req.body));
    const newPost = await pool.query(
      'INSERT INTO manga_list (title, profile, cover, rating, status, review, released, author, artist, serialization, postedby, postedon, lastupdatedon, type, genres, comments) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16) RETURNING *',
      reqBodyAsArray
    );

    // return a message
    return res.json({ message: 'Posted successfully.', success: true });
  } catch (error) {
    // return an error
    return res.json({
      message: new Error(error).message,
      success: false,
    });
  }
}

async function updatePost(req, res) {
  let filteredPost = Object.keys(req.body)
    .filter(key => key !== '_id')
    .reduce((acm, key) => ((acm[key] = req.body[key]), acm), {});

  try {
    // connect to the database
    let { db } = connectToDatabase();

    // update the post
    await db.collection('manga_list').replaceOne(
      {
        _id: new ObjectId(req.body._id),
      },
      {
        ...filteredPost,
      }
    );

    // return a message
    return res.json({
      message: 'Post updated successfully.',
      success: true,
    });
  } catch (error) {
    // return an error
    return res.json({
      message: new Error(error).message,
      success: false,
    });
  }
}

async function deletePost(req, res) {
  try {
    // connect to the database
    // let { db } = connectToDatabase();

    // delete the post
    // await db.collection('manga_list').deleteOne({
    //   _id: new ObjectId(req.body),
    // });
    let deletePost = await pool.query("DELETE FROM manga_list WHERE _id = $1", [JSON.parse(req.body)]);

    // return a message
    return res.json({
      message: 'Post deleted successfully',
      success: true,
    });
  } catch (error) {
    // return an error
    return res.json({
      message: new Error(error).message,
      success: false,
    });
  }
}
