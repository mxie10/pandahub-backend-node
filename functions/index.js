/**
 * Author: Kevin Xie
 * Date: 2024-10-19
 * This is the main entry point for the Firebase Cloud Functions API.
 * 
 * The application uses Express.js to handle HTTP requests and 
 * is configured with Firebase Admin SDK for accessing Firebase services.
 * 
 * Features:
 * - CORS support for cross-origin requests
 * - JSON and URL-encoded body parsing
 * - Compression for response bodies
 * - Routes for API endpoints are defined in the './routers' module
 * 
 * Exported as a Firebase Cloud Function to handle incoming HTTPS requests.
 */

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
