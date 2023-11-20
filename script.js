"use strict";
const summaryDesc = document.querySelector(".summary-desc");
const mainStat = document.querySelector(".circle-number");

// ForEach with 'getSkill' function

// document.addEventListener("DOMContentLoaded", function () {
//   fetch("data.json")
//     .then((response) => response.json())
//     .then((data) => data.forEach(getSkill).reduce(mainStatValue, 0))
//     .catch((err) => console.error(err));
// });

document.addEventListener("DOMContentLoaded", function () {
  fetch("data.json")
    .then((response) => response.json())
    .then((data) => data.forEach(getSkill))
    .catch((err) => console.error(`Coś poszło nie tak :( ${err}`));
});

document.addEventListener("DOMContentLoaded", function () {
  fetch("data.json")
    .then((response) => response.json())
    .then((data) => data.reduce(totalScore, 0))
    .then((value) => (mainStat.textContent = value / 4))
    .catch((err) => console.error(`Coś poszło nie tak :( ${err}`));
});

const totalScore = function (acc, cur, i, arr) {
  return acc + cur.score;
};

const getSkill = function (data, i) {
  const html = `
          <div class="summary-desc__box flex box-${i + 1}">
          <div class="flex skill-box">
          <img
          class="summary-desc__icon"
          src="${data.icon}"
          />
          <p class="summary-desc__skill">${data.category}</p>
          </div>
          <p class="summary-desc__score"><strong>${
            data.score
          }</strong> / 100</p>
          </div>`;
  summaryDesc.insertAdjacentHTML("beforeend", html);
};

// mainStat.textContent = 69;

// const mainStatValue = function (acc, cur, i, arr) {
//   cur = arr[i].score;
//   return cur + acc;
// };

// FOR LOOP

// document.addEventListener("DOMContentLoaded", function () {
//   fetch("data.json")
//     .then((response) => response.json())
//     .then(function (data) {
//       for (let i = 0; i < data.length; i++) {
//         const html = `
//         <div class="summary-desc__box flex box-${i + 1}">
//         <div class="flex skill-box">
//         <img
//         class="summary-desc__icon"
//         src="${data[i].icon}"
//         />
//         <p class="summary-desc__skill">${data[i].category}</p>
//         </div>
//         <p class="summary-desc__score"><strong>${
//           data[i].score
//         }</strong> / 100</p>
//         </div>`;

//         summaryDesc.insertAdjacentHTML("beforeend", html);
//       }
//     });
// });

// ForEach

// document.addEventListener("DOMContentLoaded", function () {
//   fetch("data.json")
//     .then((response) => response.json())
//     .then((data) =>
//       data.forEach(function (data, i) {
//         const html = `
//           <div class="summary-desc__box flex box-${i + 1}">
//           <div class="flex skill-box">
//           <img
//           class="summary-desc__icon"
//           src="${data.icon}"
//           />
//           <p class="summary-desc__skill">${data.category}</p>
//           </div>
//           <p class="summary-desc__score"><strong>${
//             data.score
//           }</strong> / 100</p>
//           </div>`;
//         summaryDesc.insertAdjacentHTML("beforeend", html);
//       })
//     )
//     .catch((err) => console.error(err));
// });
