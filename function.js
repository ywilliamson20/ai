
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyDJChMAvMh1TG03UsyI_Eo6KgZv9PCYsRM",
    authDomain: "ailearn-c1f1e.firebaseapp.com",
    databaseURL: "https://ailearn-c1f1e.firebaseio.com",
    projectId: "ailearn-c1f1e",
    storageBucket: "ailearn-c1f1e.appspot.com",
    messagingSenderId: "986144667022",
    appId: "1:986144667022:web:75f6e9a00c7faebe8660df",
    measurementId: "G-W6V8C1M3BH"
  };
  // Initialize Firebase
  if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
  }

  var category;
  var database =firebase.database();

 function getName(img) {

  //entry = database.ref('history/').push();
  //window.name = snapshot.val().image;
    window.name = img.src;
     console.log(  window.name);

 }

 /* Set the width of the side navigation to 250px */
 function openNav() {
   document.getElementById("mySidenav").style.width = "250px";
 }

 /* Set the width of the side navigation to 0 */
 function closeNav() {

   document.getElementById("mySidenav").style.width = "0";
 }
 var collect="";
var array=[];
console.log(collect);
function hi(){
  array.push(collect);
  console.log(collect);
}

function getTitle(id){
  collect=id;
  console.log(collect);
}

function searchin(){
     category= document.getElementById("search").value;
     database.ref("search").set(category);
}

firebase.database().ref('cart').once('value').then(function(snapshot) {

  console.log(snapshot.val());
  pro=snapshot.val();
  var orderin=pro.split(',');
  console.log(orderin.length);
  for( w=0; w<orderin.length; w++){
   var x = document.getElementsByClassName("dropdown-menu1")[0];
    var entry = document.createElement('a');
    entry.className = 'dropdown-item ';
    if(orderin[w]!="none"){
        entry.text = orderin[w];
    }



    x.appendChild(entry);
  }



});


var rootRef = database.ref();
var name;
var i =0;
var z =0;
var urlRef = rootRef.child("front");
  urlRef.on("value", function(csnapshot) {
    csnapshot.forEach(function(snapshot) {
    snapshot.forEach(function(child) {
      if(child.key=="img"){
        name = child.val();
        document.getElementsByClassName("imgfr")[i].src ="img/"+child.val()+".jpg";
          console.log(child.val());
            i++;
       }

    });
    });
 });
