// Your web app's Firebase configuration
  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyAAijPKXqm8ulWnJXjfDrTJvoKviO_H5kM",
    authDomain: "vamos-fofocar.firebaseapp.com",
    databaseURL: "https://vamos-fofocar-default-rtdb.firebaseio.com",
    projectId: "vamos-fofocar",
    storageBucket: "vamos-fofocar.appspot.com",
    messagingSenderId: "692641785258",
    appId: "1:692641785258:web:c4b2d016023bcfb91377d3"
  };
  
// inicializar firebase
firebase.initializeApp(firebaseConfig)  

user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Bem-vindo(a)" + user_name + "!";

function addRoom(){
    room_name =document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({

      purpose : "adicionando nome da sala"
    })
    localStorage.setItem("room_name",Room_name)
    window.location = "kwitter_page.html"
}


function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
  Room_names = childKey;
  console.log("Nome da Sala - " + Room_names);
 row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
 document.getElementById("output").innerHTML += row;
});
});

}

getData();

//function que redireciona o usuario para a salaescolhida

function redirectToRoomName(name)
{
console.log(name);
localStorage.setItem("room_name", name);
window.location = "kwitter_page.html";
}

function logout(){
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location = "index.html" ;
}