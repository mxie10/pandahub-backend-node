const express = require('express');
const eventsRoutes = require('./routes/eventsRoutes');
const app = express();

app.use('/events',eventsRoutes);

module.exports = app;