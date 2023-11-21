"use strict";
const summaryDesc = document.querySelector(".summary-desc");
const mainStat = document.querySelector(".circle-number");

document.addEventListener("DOMContentLoaded", function () {
  fetch("data.json")
    .then((response) => response.json())
    .then((data) => Stats(data))
    .catch((err) => console.error(`Something went wrong : ${err}`));
});

const Stats = function (data) {
  // HTML inplamentation ////////
  const insertHTML = data.forEach(function (data, i) {
    const html = `
    <div class="summary-desc__box flex box-${i + 1}">
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
  });

  // Total Score calculation ////////
  const elemNumber = data.map(function (arr) {
    return arr.score;
  });

  const value = data.reduce(function (acc, cur, i, arr) {
    return acc + cur.score;
  }, 0);

  mainStat.textContent = Math.trunc(value / elemNumber.length);
};
