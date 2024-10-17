const { getFirestore, FieldValue } = require('firebase-admin/firestore');
const db = getFirestore();

const update = async (req, res) => {
  const eventId = req.params.id;
  const updatedData = req.body;
  updatedData.updatedAt = FieldValue.serverTimestamp(); // Automatically update `updatedAt`
  await db.collection('events').doc(eventId).update(updatedData);
  res.status(200).json({ message: 'Event updated successfully' });
  // handle errors in eventsRoute.js
}

module.exports = update;