import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyD0WZzwo6dDUe5ZjfRk7k0DmIxEascBgmk",
  authDomain: "whatsapp-5f5f1.firebaseapp.com",
  projectId: "whatsapp-5f5f1",
  storageBucket: "whatsapp-5f5f1.appspot.com",
  messagingSenderId: "65645623046",
  appId: "1:65645623046:web:0bda9052ee48708ddb9087",
  measurementId: "G-568ND2X7K5",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;