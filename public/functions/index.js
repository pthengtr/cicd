const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

app.get("/test", (req, res) => {
  res.send("Required assignment 24.3 - Pannawit Thengtrirat");
});

exports.app = functions.https.onRequest(app);
