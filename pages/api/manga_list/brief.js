// const { connectToDatabase } = require('../../../backend/db');
const pool = require('../../../backend/db');

export default async function handler(req, res) {
  return getPosts(req, res);
}

async function getPosts(req, res) {
  try {
    // connect to the database
    // let { db } = await connectToDatabase();

    // fetch the posts
    // let posts = await db
    //   .collection('manga_list')
    //   .find({})
    //   .project({ title: 1, profile: 1, rating: 1 })
    //   .toArray();
    let posts = await pool.query(
      'SELECT _id, title, profile, rating FROM manga_list'
    );

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
