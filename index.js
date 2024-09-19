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

const menuContainer = document.getElementsByClassName("menu");
const menuBar = document.getElementsByClassName("menu");

$("#open").On("click", function () {
    menuBar.classList.add("menu");
    menuBar.add("#menu")
  })

$("#close").On("click", function () {
    menuBar.classList.remove("menu");
    menuBar.remove("#menu")
  }
)
