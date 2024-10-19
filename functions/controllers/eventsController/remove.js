const { getFirestore, FieldValue } = require('firebase-admin/firestore');
const db = getFirestore();

const remove = async (req, res) => {
  const eventId = req.params.id;
  const querySnapshot = await db.collection('events').where('id', '==', eventId).get();
  if (querySnapshot.empty) {
    return res.status(404).json({
      success: false,
      message: 'Event not found',
    });
  }
  
  const doc = querySnapshot.docs[0];
  await db.collection('events').doc(doc.id).delete();

  res.status(200).json({
    success: true,
    message: 'Event deleted successfully',
  });
  // handle errors in eventsRoute.js
}

module.exports = remove;