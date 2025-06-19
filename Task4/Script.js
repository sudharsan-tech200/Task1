let Bar = document.querySelector(".Openmenu");
let  menu = document.getElementById("Main-Menu");
let Close = document.querySelector(".Closemenu");

function HandleOpen(){
  menu.style.display = "block";
  Bar.style.display = "none";
  Close.style.display = "block";


}

function HandleClose(){
  menu.style.display = "none";
  Bar.style.display = "block";
  Close.style.display = "none";

}