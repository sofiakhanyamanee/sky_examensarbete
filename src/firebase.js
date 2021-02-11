import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyDrsSvnoZ5FTLktjeodSWVa5y1E2B8oXdI",
  authDomain: "auth-development-988bf.firebaseapp.com",
  databaseURL: "https://auth-development-988bf-default-rtdb.firebaseio.com",
  projectId: "auth-development-988bf",
  storageBucket: "auth-development-988bf.appspot.com",
  messagingSenderId: "561074624432",
  appId: "1:561074624432:web:1a249e52ba55ff243d6875"
}

const app = firebase.initializeApp(firebaseConfig);
export const database = firebase.firestore();
export const auth = firebase.auth();
export default app