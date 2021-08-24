var firebaseConfig = {
  apiKey: "AIzaSyAgqBffqd3gm3jxMCwkSm6RkDKDkoLrAQY",
  authDomain: "kwitter-b6226.firebaseapp.com",
  databaseURL: "https://kwitter-b6226-default-rtdb.firebaseio.com",
  projectId: "kwitter-b6226",
  storageBucket: "kwitter-b6226.appspot.com",
  messagingSenderId: "630963919568",
  appId: "1:630963919568:web:cebdf9a0e01a26dae59cd5"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

function adduser()
{
    user_name = document.getElementById("user_name").value;
    
    localStorage.setItem("user_name", user_name);

    window.location = "kwitter_room.html";

}

