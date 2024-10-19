const { getFirestore, FieldValue } = require('firebase-admin/firestore');
const db = getFirestore();

const filter = async (req, res) => {
  const { eventType, date } = req.query;
  let query = db.collection('events');

  if (eventType) {
    query = query.where('eventType', '==', eventType);
  }
  if (date) {
    query = query.where('date', '==', new Date(date)); 
  }

  const eventsSnapshot = await query.get();
  const events = eventsSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  res.status(200).json(events);
  // handle errors in eventsRoute.js
}

module.exports = filter;