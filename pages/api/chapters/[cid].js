// const { connectToDatabase } = require('../../../backend/db');
// const ObjectId = require('mongodb').ObjectId;
const pool = require('../../../backend/db');

export default async function handler(req, res) {
  // get the post
  return getChapter(req, res);
}

async function getChapter(req, res) {
  let { cid } = req.query;

  try {
    // connect to the database
    // let { db } = await connectToDatabase();

    // fetch the posts
    // let chapter = await db
    //   .collection('chapters')
    //   .findOne({ _id: new ObjectId(cid) });
    let chapter = await pool.query('SELECT * FROM chapters WHERE _id = $1', [
      cid,
    ]);

    // return the posts
    return res.json({
      message: JSON.parse(JSON.stringify(chapter.rows[0])),
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
