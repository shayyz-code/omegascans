// const { connectToDatabase } = require('../../../backend/db');
// const ObjectId = require('mongodb').ObjectId;
const pool = require('../../../backend/db');

export default async function handler(req, res) {
  // switch the methods

  switch (req.method) {
    case 'GET': {
      return getChapters(req, res);
    }
    case 'POST': {
      return addChapter(req, res);
    }
    case 'PUT': {
      return updateChapter(req, res);
    }
    case 'DELETE': {
      return deleteChapter(req, res);
    }
  }
}

async function getChapters(req, res) {
  try {
    // connect to the database
    // let { db } = await connectToDatabase();

    // fetch the posts
    // let chapters = await db.collection('chapters').find({}).toArray();
    let chapters = await pool.query(
      'SELECT _id, title, chapterfor FROM chapters'
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

async function addChapter(req, res) {
  try {
    // connect to the database
    // let { db } = await connectToDatabase();

    // get post count
    // let count = await db.collection('manga_list').

    // add the post
    // await db.collection('chapters').insertOne(JSON.parse(req.body));

    const reqBody = JSON.parse(req.body);
    const reqBodyAsArray = Object.keys(reqBody).map(key => reqBody[key]);

    const newChapter = await pool.query(
      'INSERT INTO chapters (title, chapterfor, released, postedby, postedon, lastupdatedon, imgs) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *',
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

async function updateChapter(req, res) {
  let filteredChapter = Object.keys(req.body)
    .filter(key => key !== '_id')
    .reduce((acm, key) => ((acm[key] = req.body[key]), acm), {});

  try {
    // connect to the database
    let { db } = connectToDatabase();

    // update the post
    await db.collection('chapters').replaceOne(
      {
        _id: new ObjectId(req.body._id),
      },
      {
        ...filteredChapter,
      }
    );

    // return a message
    return res.json({
      message: 'Chapter updated successfully.',
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

async function deleteChapter(req, res) {
  try {
    // connect to the database
    let { db } = connectToDatabase();

    // delete the post
    await db.collection('chapters').deleteOne({
      _id: new ObjectId(req.body),
    });

    // return a message
    return res.json({
      message: 'Chapter deleted successfully',
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
