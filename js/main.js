const element = document.getElementsByClassName("nav-bar-togle");
element[0].addEventListener("click", function(event) {
  event.preventDefault();
  element[0].classList.toggle("active");
});
