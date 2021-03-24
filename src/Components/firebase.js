import firebase from "firebase"

const firebaseApp = firebase.initializeApp({
   apiKey: "AIzaSyBnkQx3mQZMowwxxxQaYvJ2dt4ghPTtly0",
   authDomain: "portfolio-ddd64.firebaseapp.com",
   projectId: "portfolio-ddd64",
   storageBucket: "portfolio-ddd64.appspot.com",
   messagingSenderId: "1024863258422",
   appId: "1:1024863258422:web:f6f302c39fa3df257b1597",
})

const db = firebaseApp.firestore()
const auth = firebase.auth()
const storage = firebase.storage()

export { db, auth, storage }
