var link = document.querySelector(".btn-js");
var popup = document.querySelector(".write-us");
var close = popup.querySelector(".close");
var form = document.querySelector(".write-us");

var myname = document.querySelector("[name=name]");
var myemail = document.querySelector("[name=mail]");
var letter = document.querySelector("[name=letter]");

link.addEventListener("click", function (event) {
  event.preventDefault();
  popup.classList.add("content-show");
  myname.focus()
});

close.addEventListener("click", function (event) {
  event.preventDefault();
  popup.classList.remove("content-show")
});

window.addEventListener("keydown", function (event) {
  if (event.keyCode === 27) {
    if (popup.classList.contains("content-show")) {
      popup.classList.remove("content-show")
    }
  }
});

form.addEventListener("submit", function (event) {
  if (!myname.value || !myemail.value || !letter.value) {
    event.preventDefault();
    console.log("Нужно ввести логин и пароль");
  }
});
