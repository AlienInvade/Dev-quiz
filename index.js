// hover effect on navigation

const navigationBar = document.querySelector(".nav");
const optionMenu = document.querySelector(".select-menu");
const selectBtn = document.querySelector(".select-btn");
const options = document.querySelector(".option");
const sBtn_text = document.querySelector(".sBtn-text");

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


// Menu function 

function openMenu() {
  document.getElementById('container').style.display='inline-block';
  document.getElementById('menu').style.opacity='1';
}

function closeMenu() {
  document.getElementById('container').style.display='none';
  document.getElementById('menu').style.opacity='0';
}



selectBtn.addEventListener("click", () => optionMenu.classList.toggle("active"));

options.forEach( option => {
    option.addEventlistener("click",  ()=>{
        let selectedOption = option.querySelector(".option-text").innerText;
        sBtn_text.innerText = selectedOption;

        optionMenu.classList.remove("active");
    })
})