var link = document.querySelector(".btn-js");
var popup = document.querySelector(".write-us");
var popclose = popup.querySelector(".popup-close");
var form = document.querySelector(".write-us");

var myname = document.querySelector("[name=name]");
var myemail = document.querySelector("[name=mail]");
var letter = document.querySelector("[name=letter]");
var mapopen = document.querySelector(".streat-img");
var mappop = document.querySelector(".map-open");
var mapclose = mappop.querySelector(".map-close");

mapopen.addEventListener("click", function (event) {
  event.preventDefault();
  mappop.classList.add("content-show");
});

mapclose.addEventListener("click", function (event) {
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

link.addEventListener("click", function (event) {
  event.preventDefault();
  popup.classList.add("content-show");
    myname.focus();
});

popclose.addEventListener("click", function (event) {
  event.preventDefault();
  popup.classList.remove("content-show")
  popup.classList.remove("modal-error")
});

window.addEventListener("keydown", function (event) {
  if (event.keyCode === 27) {
    if (popup.classList.contains("content-show")) {
      popup.classList.remove("content-show")
      popup.classList.remove("modal-error");
    }
  }
});

form.addEventListener("submit", function (event) {
  if (!myname.value || !myemail.value || !letter.value) {
    event.preventDefault();
    console.log("Нужно ввести логин, пароль и e-mail");
  }
});

form.addEventListener("submit", function (event) {
  if (!myname.value || !myemail.value || !letter.value) {
    event.preventDefault();
    popup.classList.remove("modal-error");
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add("modal-error");
  }
});
