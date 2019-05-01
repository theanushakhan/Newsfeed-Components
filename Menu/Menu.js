const toggleMenu = () => {
  // Toggle the "menu--open" class on your menu refence. 
  //Update
  menu.classList.toggle("menu--open");
}

// Start Here: Create a reference to the ".menu" class
//Update
const menu;
const menu = document.querySelector(".menu");
// create a reference to the ".menu-button" class
//Update
const menuButton;
const menuButton = document.querySelector(".menu-button");
// Using your menuButton reference, add a click handler that calls toggleMenu
//Update
menuButton.addEventListener('click', toggleMenu); 