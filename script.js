window.onscroll = function() {stickyFunction()};

const navbar = document.getElementById("nav");
const sticky = navbar.offsetTop;
function stickyFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}