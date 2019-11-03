var link = document.querySelector(".streat-img");
var mappop = document.querySelector(".map-open");
var close = mappop.querySelector(".close");

link.addEventListener("click", function (event) {
  event.preventDefault();
  mappop.classList.add("content-show");
});

close.addEventListener("click", function (event) {
  event.preventDefault();
  mappop.classList.remove("content-show")
});

window.addEventListener("keydown", function (event) {
  if (event.keyCode === 27) {
    if (mappop.classList.contains("content-show")) {
      mappop.classList.remove("content-show")
    }
  }
});

