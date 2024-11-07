
// Responsive Navigation
function openNav() {
  var x = document.getElementById("myNavBar");
  if (x.className === "nav-list") {
    x.className += " responsive";
  } else {
    x.className = "nav-list";
  }
}


// Sticky Header

window.onscroll = function () {
  myFunction();
};

var header = document.getElementById("myHeader");
var sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
    
  } else {
    header.classList.remove("sticky");
  }
}


// ANOPISS Accordion Tabs

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active-tab");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}