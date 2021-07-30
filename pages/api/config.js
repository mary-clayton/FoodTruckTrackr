import firebase from 'firebase/app';
import 'firebase/auth';

var firebaseConfig = {
    apiKey: "AIzaSyBKTCCTaGdZ59Gh4u4jC-N7M8I1382ufZ4",
    authDomain: "foodtrucktrackr-caa59.firebaseapp.com",
    projectId: "foodtrucktrackr-caa59",
    storageBucket: "foodtrucktrackr-caa59.appspot.com",
    messagingSenderId: "404901833707",
    appId: "1:404901833707:web:275c00d46ef7305c0cc7ae",
    measurementId: "G-QFZ6EXEV8R"
  };

export default function initFirebase() {
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }
}