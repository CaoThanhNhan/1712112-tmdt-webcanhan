//first last number email add1
var first =document.getElementById("first");
var last =document.getElementById("last");
var number =document.getElementById("number");
var email =document.getElementById("email");
var add1 =document.getElementById("add1");
var but =document.getElementById("but");
function subbut(){
  window.alert("Đã xong")
    firebase.database().ref().child("name").push().set("first");
} 