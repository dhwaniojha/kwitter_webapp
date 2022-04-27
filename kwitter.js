const firebaseConfig = {
  apiKey: "AIzaSyCCGKHCz-gbTXFHMbsSlsRD07GHFM6OxIo",
  authDomain: "kwitter-c7391.firebaseapp.com",
  databaseURL: "https://kwitter-c7391-default-rtdb.firebaseio.com",
  projectId: "kwitter-c7391",
  storageBucket: "kwitter-c7391.appspot.com",
  messagingSenderId: "157865977942",
  appId: "1:157865977942:web:9356b6d6b4100b409633f7",
  measurementId: "G-YPP6HXN8ZH"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
function addUser() {

  user_name = document.getElementById("user_name").value;
 

  localStorage.setItem("user_name", user_name);
  
    window.location = "kwitter_room.html";
}

