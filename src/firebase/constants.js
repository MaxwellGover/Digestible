import firebase from 'firebase'

firebase.initializeApp({
    apiKey: "AIzaSyAdSLXcIrAp_xXr6T9APC1MVU9pAQ8VsHA",
    authDomain: "digestible-159a3.firebaseapp.com",
    databaseURL: "https://digestible-159a3.firebaseio.com",
    storageBucket: "digestible-159a3.appspot.com",
    messagingSenderId: "1003151956886"
});

const database = firebase.database();
const firebaseAuth = firebase.auth();

export { database, firebaseAuth }