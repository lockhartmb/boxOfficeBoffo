import firebase from 'firebase';

var config = {
  apiKey: "AIzaSyDNvyaAye3hGZQvFxEHL1gpz-Eemxlm9fQ",
  authDomain: "boxofficeboffo-27ce9.firebaseapp.com",
  databaseURL: "https://boxofficeboffo-27ce9.firebaseio.com",
  projectId: "boxofficeboffo-27ce9",
  storageBucket: "boxofficeboffo-27ce9.appspot.com",
  messagingSenderId: "179623309106"
};
firebase.initializeApp(config);

export default firebase