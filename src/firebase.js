import firebase from 'firebase';

const config = {
	apiKey: "AIzaSyC6_d1QZktoGYbFcFwkI1SZdAw8kumwoNo",
	authDomain: "boxofficeboffo-5421b.firebaseapp.com",
	databaseURL: "https://boxofficeboffo-5421b.firebaseio.com",
	projectId: "boxofficeboffo-5421b",
	storageBucket: "",
	messagingSenderId: "264387681081"
};
firebase.initializeApp(config);
export default firebase;