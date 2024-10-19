const express = require('express');
const router = express.Router();
const eventsMethods = require('../controllers/eventsController/index');
const { catchErrors } = require('../controllers/handlers/catchError');

// Add event
router.post('/', catchErrors(eventsMethods.create));

// Get events
router.get('/', catchErrors(eventsMethods.listAll));

// Get Event by ID
router.get('/:id', catchErrors(eventsMethods.read));

// Update Event
router.put('/:id', catchErrors(eventsMethods.update));

// Delete Event
router.delete('/:id', catchErrors(eventsMethods.remove));

// Filter Events by Event Type or Date
router.get('/filter/:eventType', catchErrors(eventsMethods.filter));

module.exports = router; 