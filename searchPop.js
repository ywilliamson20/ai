
  // Your web app's Firebase configuration

  // Initialize Firebase


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
firebase.database().ref('search').once('value').then(function(snapshot) {
  //console.log(snapshot.val());
  category=snapshot.val();

  // ...


  console.log(category);
if(category=="electronics"){
var rootRef = database.ref();
var name;
var i =0;
var z =0;
var d = 0;
var urlRef = rootRef.child("electronics");
  urlRef.on("value", function(csnapshot) {
    csnapshot.forEach(function(snapshot) {
    snapshot.forEach(function(child) {
      if(child.key=="img"){
        name = child.val();
        document.getElementsByClassName("img1")[i].src ="img/"+child.val()+".jpg";
          console.log(child.val());
            i++;
       }
       else if(child.key=="name" ){
         document.getElementsByClassName("product")[z].innerHTML  =child.val();
           console.log(child.val());

           z++;
        }
        else if(child.key=="price"){
          document.getElementsByClassName("price")[d].innerHTML  =child.val();
            console.log(child.val());
            d++;

         }

    });
    });
 });
}
});
