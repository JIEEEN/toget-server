const admin = require("firebase-admin");
const serviceAccount = require("../private/toget-829b5-firebase-adminsdk-gqbci-72ae9a9b55.json");

admin.initializeApp({ // Firebase
    credential: admin.credential.cert(serviceAccount)
});


module.exports = admin;
