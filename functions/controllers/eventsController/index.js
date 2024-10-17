const createEvent = require('./create');
const listAllEvents = require('./listAll');
const readEvent = require('./read');
const removeEvent = require('./remove');
const updateEvent = require('./update');
const filterEvent = require('./filter');

const eventsMethods = {
  create: createEvent,
  listAll: listAllEvents,
  read: readEvent,
  remove: removeEvent,
  update: updateEvent,
  filter: filterEvent
};

module.exports = eventsMethods;