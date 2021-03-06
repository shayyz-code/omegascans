// const { connectToDatabase } = require('../../../backend/db');
const pool = require('../../../backend/db');
// const ObjectId = require('mongodb').ObjectId;

export default async function handler(req, res) {
  // get the post
  return getPost(req, res);
}

async function getPost(req, res) {
  let { pid } = req.query;

  try {
    // connect to the database
    // let { db } = await connectToDatabase();

    // fetch the posts
    // let post = await db
    //   .collection('manga_list')
    //   .findOne({ _id: new ObjectId(pid) });
    let post = await pool.query('SELECT * FROM manga_list WHERE _id = $1', [
      pid,
    ]);

    // return the posts
    return res.json({
      message: JSON.parse(JSON.stringify(post.rows[0])),
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
