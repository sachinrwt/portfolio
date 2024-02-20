
window.onscroll = function() {myFunction()};
  
var navlist = document.getElementById("main-nav");
var sticky = navlist.offsetTop;

/* Function to stick the nav bar */
function myFunction() {
    if (window.pageYOffset >= sticky) {
        navlist.classList.add("sticky")
    }
    else {
        navlist.classList.remove("sticky");
    }
}

var icon = document.getElementById("icon");

    icon.onclick = function(){
        document.body.classList.toggle("dark");
    }

    const gridChildren = document.querySelectorAll('.grid__child');

    gridChildren.forEach((child, index) => {
      child.addEventListener('mouseenter', () => handleMouseEnter(event));
      child.addEventListener('mouseleave', () => handleMouseLeave()) 
    });
    
    function handleMouseEnter(event) {
      gridChildren.forEach(child => {
        if (event.target === child) return;
        
        child.classList.add('is-dimmed');
      })
    }
    
    function handleMouseLeave() {
      gridChildren.forEach(child => {
        child.classList.remove('is-dimmed');
      })
    }

    // Text effect
    
    
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

let interval = null;

document.getElementById("h1").onmouseover = event => {  
  let iteration = 0;
  
  clearInterval(interval);
  
  interval = setInterval(() => {
    event.target.innerText = event.target.innerText
      .split("")
      .map((letter, index) => {
        if(index < iteration) {
          return event.target.dataset.value[index];
        }
      
        return letters[Math.floor(Math.random() * 26)]
      })
      .join("");
    
    if(iteration >= event.target.dataset.value.length){ 
      clearInterval(interval);
    }
    
    iteration += 1 / 3;
  }, 30);
}


function myFunction(x) {
  if (x.matches) { // If media query matches
    const sd = document.getElementById("shortdiscription");
      sd.remove();
      const im = document.getElementById("iam");
      im.add();
  }
  else{
    const im = document.getElementById("iam");
      im.remove();
    const sd = document.getElementById("shortdiscription");
      sd.add();
  }
  
}

var x = window.matchMedia("(max-width: 600px)")

myFunction(x);
