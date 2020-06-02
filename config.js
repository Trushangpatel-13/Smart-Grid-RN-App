import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBrfRUIgZ_5HgN_qynLsl71pGT7CRlE0AM",
    authDomain: "mgvcl-31954.firebaseapp.com",
    databaseURL: "https://mgvcl-31954.firebaseio.com",
    projectId: "mgvcl-31954",
    storageBucket: "mgvcl-31954.appspot.com",
    messagingSenderId: "668719767478",
    appId: "1:668719767478:web:fb0904317157198f31ab17"
  }
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

export default firebase;