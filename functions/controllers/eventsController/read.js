const { getFirestore, FieldValue } = require('firebase-admin/firestore');
const db = getFirestore();

const read = async (req, res) => {
  const eventId = req.params.id;
  const querySnapshot = await db.collection('events').where('id', '==', eventId).limit(1).get();
  if (querySnapshot.empty) {
    return res.status(404).json({
      success: false,
      message: 'Event not found',
    });
  }
  const doc = querySnapshot.docs[0];
  const eventData = doc.data(); 
  res.status(200).json({
    success: true,
    message: 'Event retrieved successfully',
    data: { id: doc.id, ...eventData }, 
  });
  // handle errors in eventsRoute.js
}

module.exports = read;