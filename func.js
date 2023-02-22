const bigWrapper = document.querySelector(".big-wrapper"); 
const hamburgerMenu = document.querySelector(".hamburger-menu"); 
let elementsArray = document.querySelectorAll(".close"); 
 



hamburgerMenu.addEventListener("click", () =>{
  bigWrapper.classList.toggle("active");  
  // console.log(bigWrapper); 
  
})
 
elementsArray.forEach(function(elem){
  elem.addEventListener("click", ()=> {
    bigWrapper.classList.toggle("active"); 
  })
})



