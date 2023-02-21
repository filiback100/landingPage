const bigWrapper = document.querySelector(".big-wrapper"); 
const hamburgerMenu = document.querySelector(".hamburger-menu"); 
hamburgerMenu.addEventListener("click", () =>{
  bigWrapper.classList.toggle("active");  
  // console.log(bigWrapper); 
  
})

