import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.8.1/firebase-auth.js";
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.8.1/firebase-analytics.js";

const firebaseConfig = {
   apiKey: "AIzaSyCxwXejj3zuSz9FRK43EJBfWYzWcIkQLWU",
   authDomain: "cloudbrowser-ecda5.firebaseapp.com",
   projectId: "cloudbrowser-ecda5",
   storageBucket: "cloudbrowser-ecda5.appspot.com",
   messagingSenderId: "377912068769",
   appId: "1:377912068769:web:dedc98dd783579d46cfee0",
   measurementId: "G-FHQZSTKQ66"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const loginbutton = document.getElementById("loginbutton");

const emailinput = document.getElementById("email");
const passwordinput = document.getElementById("password");

const auth = getAuth();
createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    const user = userCredential.user;
    alert("login complete")
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });

signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });

onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
    const uid = user.uid;
    // ...
  } else {
    // User is signed out
    // ...
  }
});

loginbutton.addEventListener('click', function(){
    signInWithEmailAndPassword(auth, emailinput.value, passwordinput.value)
});
