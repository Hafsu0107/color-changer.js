const buttons = document.querySelectorAll(".buttons");
const body = document.querySelector("body");

buttons.forEach(function (buttons) {
  console.log(buttons);
  buttons.addEventListener("click", function (e) {
    console.log(e);
    console.log(e.target);
    if (e.target.id === "red") {
      body.style.backgroundColor = e.target.id;
    }
  });
});
