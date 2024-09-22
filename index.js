// hover effect on navigation

const navigationBar = document.querySelector(".nav");

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

// select menu
const optionMenu = document.querySelector(".select-menu"),
      selectBtn = optionMenu.querySelector(".select-btn"),
      options = optionMenu.querySelectorAll(".option"),
      sBtn_text = optionMenu.querySelector(".sBtn-text");
      const item_name = document.getElementById("item-name");

selectBtn.addEventListener("click", () => optionMenu.classList.toggle("active"));

options.forEach( option => {
    option.addEventListener("click", ()=>{
        let selectedOption = option.querySelector(".option-text").innerText;
        sBtn_text.innerText = selectedOption;
        item_name.innerText = selectedOption;
        document.querySelector(".item-container").style.display = "flex";
        optionMenu.classList.remove("active");
    })
})

document.getElementById("x-select-container").addEventListener("click", () => {
  document.querySelector(".item-container").style.display = "none";    
});
  



