import firebase from 'firebase'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyDMwnANVy5Pqj_LLpX_ogJlZ9MYed11jVc",
  authDomain: "olxapp-a6909.firebaseapp.com",
  projectId: "olxapp-a6909",
  storageBucket: "olxapp-a6909.appspot.com",
  messagingSenderId: "236552295545",
  appId: "1:236552295545:web:a971a6c0e3a2339018f0a8",
  measurementId: "G-ZQ02CXQ3LF"
};

   firebase.initializeApp(firebaseConfig)
  export default firebase