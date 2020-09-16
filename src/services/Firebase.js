
import firebase from 'firebase';
const config = {
  apiKey: "AIzaSyDcNq090WQmWzvtvUqAzYIKevuag2tljIU",
  authDomain: "ecomm-45151.firebaseapp.com",
  databaseURL: "https://ecomm-45151.firebaseio.com",
  projectId: "ecomm-45151",
  storageBucket: "ecomm-45151.appspot.com",
  messagingSenderId: "1056113013325",
  appId: "1:1056113013325:web:ddca902f903c0fa8216204",
  measurementId: "G-2NKTXQQHM4"
};
firebase.initializeApp(config);
const db = firebase.firestore();

export default firebase;
export {db};

