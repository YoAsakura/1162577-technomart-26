var buylink = document.querySelectorAll(".button-buy");
var buypopup = document.querySelector(".modal-buy");
var close = buypopup.querySelector(".close");
var buttoncontinue = buypopup.querySelector(".button-continue");

close.addEventListener("click", function (event) {
  event.preventDefault();
  buypopup.classList.remove("content-show")
});

buttoncontinue.addEventListener("click", function (event) {
  event.preventDefault();
  buypopup.classList.remove("content-show")
});

window.addEventListener("keydown", function (event) {
  if (event.keyCode === 27) {
    if (buypopup.classList.contains("content-show")) {
      buypopup.classList.remove("content-show")
    }
  }
});

buylink.forEach(element => {
  element.addEventListener("click", function (event) {
    event.preventDefault();
    buypopup.classList.add("content-show");
  })
});
