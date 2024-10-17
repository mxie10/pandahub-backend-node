const admin = require('firebase-admin');
admin.initializeApp();
const express = require('express');
const cors = require('cors');
const routes = require('./routers');
const compression = require('compression');
const functions = require('firebase-functions');

const app = express();

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(compression());

app.use('/api', routes);

exports.api = functions.https.onRequest(app);
