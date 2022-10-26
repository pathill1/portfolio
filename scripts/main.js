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

