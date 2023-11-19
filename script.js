"use strict";
const summaryDesc = document.querySelector(".summary-desc");
const mainStat = document.querySelector(".circle-number");

// FOR LOOP

document.addEventListener("DOMContentLoaded", function () {
  fetch("data.json")
    .then((response) => response.json())
    .then(function (data) {
      for (let i = 0; i < data.length; i++) {
        const html = `
        <div class="summary-desc__box flex box-${i + 1}">
        <div class="flex skill-box">
        <img
        class="summary-desc__icon"
        src="${data[i].icon}"
        />
        <p class="summary-desc__skill">${data[i].category}</p>
        </div>
        <p class="summary-desc__score"><strong>${
          data[i].score
        }</strong> / 100</p>
        </div>`;

        summaryDesc.insertAdjacentHTML("beforeend", html);
      }
    });
});

/*
document.addEventListener("DOMContentLoaded", function () {
  fetch("data.json")
    .then((response) => response.json())
    .then((data) => data.forEach(getSkill))
    .catch((err) => console.error(err));
});


const getSkill = function (data) {
  const html = `
  <div class="summary-desc__box flex box-1">
  <div class="flex skill-box">
  <img
  class="summary-desc__icon"
  src="${data.icon}"
  />
  <p class="summary-desc__skill">${data.category}</p>
  </div>
  <p class="summary-desc__score"><strong>${data.score}</strong> / 100</p>
  </div>`;
  summaryDesc.insertAdjacentHTML("beforeend", html);
};

*/
// const currentPosition = function (arr) {
//   const array = [];

//   for (let i = 0; i < arr.length; i++) {
//     array.push(i + 1);
//   }
//   console.log(array);

//   // array.forEach();
// };

// currentPosition([3, 5, 6, 7, 8, 9, 3]);

// const length =
