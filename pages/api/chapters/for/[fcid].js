// const { connectToDatabase } = require('../../../../backend/db');
// const ObjectId = require('mongodb').ObjectId;
const pool = require('../../../../backend/db');

export default async function handler(req, res) {
  // get the post
  return getChaptersWithForChapter(req, res);
}

async function getChaptersWithForChapter(req, res) {
  let { fcid } = req.query;

  try {
    // connect to the database
    // let { db } = await connectToDatabase();

    // fetch the posts
    // let chapters = await db
    //   .collection('chapters')
    //   .find({ chapterFor: fcid })
    //   .project({ title: 1 })
    //   .toArray();
    let chapters = await pool.query(
      'SELECT _id, title FROM chapters WHERE chapterfor = $1',
      [fcid]
    );

    // return the posts
    return res.json({
      message: JSON.parse(JSON.stringify(chapters.rows)),
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
