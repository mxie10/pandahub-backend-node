const { getFirestore } = require('firebase-admin/firestore');
const db = getFirestore();

const listAll = async (req, res) => {
  const eventsSnapshot = await db.collection('events').orderBy('date','desc').get();
  const events = eventsSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  res.status(200).json(events);
  // handle errors in eventsRoute.js
};

module.exports = listAll;
