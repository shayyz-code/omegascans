const { connectToDatabase } = require('../../backend/db');
const ObjectId = require('mongodb').ObjectId;

export default async function handler(req, res) {
  // switch the methods

  switch (req.method) {
    case 'GET': {
      return getData(req, res);
    }
    case 'POST': {
      return addData(req, res);
    }
    case 'PUT': {
      return updateData(req, res);
    }
    case 'DELETE': {
      return deleteData(req, res);
    }
  }
}

async function getData(req, res) {
  try {
    // connect to the database
    let { db } = await connectToDatabase();

    // fetch the posts
    let data = await db.collection('authors').find({}).toArray();

    // return the posts
    return res.json({
      message: JSON.parse(JSON.stringify(data)),
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

async function addData(req, res) {
  try {
    // connect to the database
    let { db } = await connectToDatabase();
    // add the post
    await db.collection('authors').insertOne(JSON.parse(req.body));

    // return a message
    return res.json({ message: 'Data added successfully.', success: true });
  } catch (error) {
    // return an error
    return res.json({
      message: new Error(error).message,
      success: false,
    });
  }
}

async function updateData(req, res) {
  let reqBody = JSON.parse(req.body);

  try {
    // connect to the database
    let { db } = await connectToDatabase();

    // update the post
    await db.collection('authors').updateOne(
      {
        _id: new ObjectId(reqBody._id),
      },
      {
        $set: {
          name: reqBody.name,
        },
      }
    );

    // return a message
    return res.json({
      message: 'Data updated successfully.',
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

async function deleteData(req, res) {
  try {
    // connect to the database
    let { db } = await connectToDatabase();

    // delete the post
    await db.collection('authors').deleteOne({
      _id: new ObjectId(req.body),
    });

    // return a message
    return res.json({
      message: 'Data deleted successfully',
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
