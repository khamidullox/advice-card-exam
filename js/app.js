let api = "https://api.adviceslip.com/advice/";

let btnGeneret = document.querySelector("button");
let pargarf = document.querySelector("p");
let advId = document.querySelector("h5");
let div = document.querySelector("div");

function open() {
  let randomNumber = Math.trunc(Math.random() * 224 + 1);
  fetch(api + randomNumber)
    .then((api) => {
      return api.json();
    })
    .then((adv) => {
      console.log(adv);
      randomAdv(adv);
    });
  function randomAdv(adv) {
    advId.textContent = `ADVICE #${randomNumber}`;
    pargarf.textContent = `"${adv.slip.advice}"`;

    if (adv.slip.advice.length > 100) {
      div.style.height = "31rem";
    } else if (adv.slip.advice.length < 45) {
      div.style.height = "26rem";
    } else {
      div.style.height = "29rem";
    }
  }
}
open();

btnGeneret.addEventListener("click", () => {
  open();
  new Audio("../music/pen-click-sound.mp3").play();
});
