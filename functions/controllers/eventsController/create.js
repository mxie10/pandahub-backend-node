const { getFirestore, FieldValue } = require('firebase-admin/firestore');
const db = getFirestore();

const create = async (req, res) => {
  const body = req.body;
  body.updatedAt = FieldValue.serverTimestamp(); 
  const docRef = await db.collection('events').add(body);
  res.status(200).json(
    { 
      success: true,
      result: docRef,
      message: `Event created successfully with ID: ${docRef.id}` 
    }
  );
  // handle errors in eventsRoute.js
}

module.exports = create;