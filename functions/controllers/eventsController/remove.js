const { getFirestore, FieldValue } = require('firebase-admin/firestore');
const db = getFirestore();

const remove = async (req, res) => {
  const eventId = req.params.id;
  await db.collection('events').doc(eventId).delete();
  res.status(200).json(
    { 
      success: true,
      message: 'Event deleted successfully' 
    }
  );
  // handle errors in eventsRoute.js
}

module.exports = remove;