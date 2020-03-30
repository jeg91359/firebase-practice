const functions = require("firebase-functions");
const admin = require("firebase-admin");

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//

admin.initializeApp({
  credential: admin.credential.applicationDefault(),
  databaseURL: "ws://fs1prod-27deb.firebaseio.com/"
});

exports.helloWorld = functions.https.onRequest((request, response) => {
  response.send("Hello from Firebase!");
});

exports.getComments = functions.https.onRequest((request, response) => {
  response.send("Comments from Firebase!");
});

exports.createComments = functions.https.onRequest((request, response) => {
    console.log(request.body);
  admin
    .database()
    .ref("/comments")
    .push(request.body);
  response.send("Comments added from Firebase!");
});


