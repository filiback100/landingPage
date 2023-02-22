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



// Get the button:
let mybutton = document.getElementById("myBtn");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}


function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}



