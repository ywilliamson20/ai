
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

if (firebase.apps.length === 0) {
      firebase.initializeApp(firebaseConfig);
}

// Initialize Firebase

var database =firebase.database();

document.getElementById("img").src =  window.name;
console.log(window.name);

var yourstring = window.name;
var index = yourstring.lastIndexOf("/") + 1;
var filename = yourstring.substr(index);
filename= filename.split(".")[0];
var parents="";

var name;
var pro ="";
var i =0;


var rootRef = database.ref();
 //Get Image Info
 var urlRef = rootRef.child("electronics");
   urlRef.once("value", function(csnapshot) {
     csnapshot.forEach(function(snapshot) {
     snapshot.forEach(function(child) {
       if(child.val()==filename&&child.key=="img"){
         parents=snapshot.key;
         console.log(parents);
         // database.ref("electronics").set(news);
        }
        if(snapshot.key==parents&&child.key=="name"){

          //if(){
           document.getElementById("product").innerHTML = child.val();
           console.log(child.val());

         }
         else if(snapshot.key==parents&&child.key=="price"){

           //if(){
            document.getElementById("price").innerHTML = child.val();

          }

     });
     });
  });

  var urlRef = rootRef.child("front");
    urlRef.once("value", function(csnapshot) {
      csnapshot.forEach(function(snapshot) {
      snapshot.forEach(function(child) {
        if(child.val()==filename&&child.key=="img"){
          parents=snapshot.key;
          console.log(parents);
          // database.ref("electronics").set(news);
         }
         if(snapshot.key==parents&&child.key=="name"){

           //if(){
            document.getElementById("product").innerHTML = child.val();
            console.log(child.val());

          }
          else if(snapshot.key==parents&&child.key=="price"){

            //if(){
             document.getElementById("price").innerHTML = child.val();

           }

      });
      });
   });


function myFunction() {
  document.getElementById("hide").getAttribute("aria-expanded") = "false";

}
var cartTot =0;
function add(){

  var x = document.getElementById("price").textContent;
  ///x=x+x;
  console.log(x);
  var y = document.getElementById("product").textContent;
  cartTot=parseInt(x)+ parseInt(cartTot);
  pro=pro+","+y;
  database.ref("Total").set(cartTot);
  database.ref("buy").set(y);
  database.ref("cart").set(pro);
  document.getElementById("list").textContent="Item: "+y;
  document.getElementById("total").textContent="Subtotal: "+cartTot;

}

firebase.database().ref('Total').once('value').then(function(snapshot) {
  //console.log(snapshot.val());
  cartTot=parseInt(snapshot.val());

  // ...
});

function pay(){
  document.getElementById("list").textContent="Item: ";
  document.getElementById("total").textContent="Subtotal: ";


}
