import { * } from "https://www.gstatic.com/firebasejs/9.8.1/firebase-auth.js";

const loginbutton = document.getElementbyID("loginbutton");

const emailinput = document.getElementbyID("email");
const passwordinput = document.getElementbyID("password");

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

signOut(auth).then(() => {
  // Sign-out successful.
}).catch((error) => {
  // An error happened.
});

loginbutton.addEventListener('click', function(){
    signInWithEmailAndPassword(auth, emailinput.value, passwordinput.value)
});
