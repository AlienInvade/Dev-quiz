const navigationBar = document.querySelector("nav");

navigationBar.addEventListener("mouseover", hover);
navigationBar.addEventListener("mouseout", hoverOut);

function hover() {
  navigationBar.classList.add("black");
  setTimeout( function () { 
    navigationBar.classList.add("cursor")}, 500);
}


function hoverOut() {
  navigationBar.classList.remove("black");
  navigationBar.classList.remove("cursor");
  
}


function openMenu() {
  document.getElementsByClassName('menu').style.right = '0%';
  document.getElementById('menu').style.opacity = '1';
}
