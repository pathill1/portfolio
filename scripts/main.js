const observer = new IntersectionObserver((entries)=>
{
  entries.forEach((entry)=>
  {
    console.log(entry)
    if (entry.isIntersecting){
      entry.target.classList.add('show');
    } else{
      entry.target.classList.remove('show');
    }
  });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el)=>observer.observe(el));


/* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("topNav").style.top = "0";
  } else {
    document.getElementById("topNav").style.top = "-50px";
  }
  prevScrollpos = currentScrollPos;
}

let circle = document.getElementById('circle');
const onMouseMove = (e) =>{
  circle.style.left = e.pageX + 'px';
  circle.style.top = e.pageY + 'px';
}
document.addEventListener('mousemove', onMouseMove);

/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction2() {
  document.getElementById("myDropdown").classList.toggle("showbtn");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('showbtn')) {
        openDropdown.classList.remove('showbtn');
      }
    }
  }
}

