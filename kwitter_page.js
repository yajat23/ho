const firebaseConfig = {
      apiKey: "AIzaSyA0M5sAbuflm69lLYl3PtbHbmxkb9ql9hE",
      authDomain: "kwitter-4aca3.firebaseapp.com",
      databaseURL: "https://kwitter-4aca3-default-rtdb.firebaseio.com",
      projectId: "kwitter-4aca3",
      storageBucket: "kwitter-4aca3.appspot.com",
      messagingSenderId: "686006766274",
      appId: "1:686006766274:web:b94f2d838334c7fbfe895b"
    };

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
console.log(firebase_message_id);
console.log(massage_data)
name = message_data['name'];
message = message_data['message'];
like = message_data['like'];
name_with_tag = "<h4>"+ name + "< image class='user_tick' src='tick.png'></h4> "
message_with_tag = "<h4 class='message_h4'>"+ message +"</h4>"
like_button = " <button class='btn btn_warning' id="+firebase_message_id+" value="+like+" onclick='updatelike(this.id)'>"
span_with_tag = "< span class='glyphicon glyphicon-thumbs-up'>like: "+ like +"</span></button><hr>"

row =  name_with_tag + message_with_tag +like_button + span_with_tag;
document.getElementById("output").innerHTML =+ row;
//End code
      } });  }); }
getData();
