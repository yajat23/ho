
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA0M5sAbuflm69lLYl3PtbHbmxkb9ql9hE",
  authDomain: "kwitter-4aca3.firebaseapp.com",
  databaseURL: "https://kwitter-4aca3-default-rtdb.firebaseio.com",
  projectId: "kwitter-4aca3",
  storageBucket: "kwitter-4aca3.appspot.com",
  messagingSenderId: "686006766274",
  appId: "1:686006766274:web:b94f2d838334c7fbfe895b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

function addUser()
{
user_name = document.getElementById("user_name").value;
localStorage.setItem("user_name", user_name);
window.location = "kwitter_room.html"
}
    
