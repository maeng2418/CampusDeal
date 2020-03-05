const express = require('express');
const router = express.Router();
const admin = require("firebase-admin");

const serviceAccount = require("../config/serviceAccountKey.json");
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://campus-deal-6637b.firebaseio.com"
});   

router.post('/api/login', (req, res, next) => {
    console.log(req.body.email)
    console.log(req.body.book)
    admin.auth().getUserByEmail(req.body.email).then(function(userRecord) {
    // See the UserRecord reference doc for the contents of userRecord.
    console.log('Successfully fetched user data:', userRecord.toJSON());
  })
  .catch(function(error) {
   console.log('Error fetching user data:', error);
  });
});

module.exports = router;
