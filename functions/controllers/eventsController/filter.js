const { getFirestore } = require('firebase-admin/firestore');
const db = getFirestore();

const filter = async (req, res) => {
  const eventType = req.params.eventType;
  let query = db.collection('events');

  if (eventType) {
    query = query.where('eventType', '==', eventType);
  }

  const eventsSnapshot = await query.get();
  const events = eventsSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  res.status(200).json(events);
  // handle errors in eventsRoute.js
}

module.exports = filter;