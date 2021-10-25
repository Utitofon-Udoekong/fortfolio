import * as admin from "firebase-admin";
const serviceAccount = require("../../service-account-file.json");

admin.initializeApp({
    credential: admin.credential.cert({
        projectId: process.env.PROJECT_ID,
        privateKey: process.env.PRIVATE_KEY?.replace(/\\n/g, '\n'),
        clientEmail: process.env.CLIENT_EMAIL,
    })
});