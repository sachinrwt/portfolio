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