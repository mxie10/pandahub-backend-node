const { getFirestore, FieldValue, Timestamp } = require('firebase-admin/firestore');
const db = getFirestore();

const update = async (req, res) => {
  const eventId = req.params.id;
  const body = req.body;
  if (body.date) {
    body.date = Timestamp.fromDate(new Date(body.date));
  }
  body.updatedAt = FieldValue.serverTimestamp(); // Automatically update `updatedAt`
  const querySnapshot = await db.collection('events').where('id', '==', eventId).limit(1).get();
  if (querySnapshot.empty) {
    return res.status(404).json({
      success: false,
      message: 'Event not found',
    });
  }
  const doc = querySnapshot.docs[0];
  await db.collection('events').doc(doc.id).update(body);

  res.status(200).json({
    success: true,
    message: 'Event updated successfully',
  });
  // handle errors in eventsRoute.js
}

module.exports = update;

