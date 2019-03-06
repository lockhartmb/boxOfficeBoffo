import firebase from 'firebase';

  var config = {
    apiKey: "AIzaSyD1XDdPkKLLE16BSJ_nz2YMgiMDCRw0594",
    authDomain: "auth-test-d2fa2.firebaseapp.com",
    databaseURL: "https://auth-test-d2fa2.firebaseio.com",
    projectId: "auth-test-d2fa2",
    storageBucket: "auth-test-d2fa2.appspot.com",
    messagingSenderId: "194937812413"
  };
  firebase.initializeApp(config);

  export default firebase