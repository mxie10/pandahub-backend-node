const { getFirestore, FieldValue } = require('firebase-admin/firestore');
const db = getFirestore();

const read = async (req, res) => {
  const eventId = req.params.id;
  const eventDoc = await db.collection('events').doc(eventId).get();
    if (!eventDoc.exists) {
      return res.status(404).json(
        { 
          error: 'Event not found' 
        }
      );
    }
  res.status(200).json(eventDoc.data());
  // handle errors in eventsRoute.js
}

module.exports = read;