"use strict";

const summaryDesc = document.querySelector(".summary-desc");

document.addEventListener("DOMContentLoaded", function () {
  fetch("data.json")
    .then((response) => response.json())
    .then((data) =>
      data.forEach(function (data) {
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
      })
    );
});

// const length =

// const getSkill = function (data) {
//   const html = `
//             <div class="summary-desc__box flex box-1">
//                 <div class="flex skill-box">
//                     <img
//                     class="summary-desc__icon"
//                     src="${data.icon}"
//                     />
//                     <p class="summary-desc__skill">${data.category}</p>
//                 </div>
//               <p class="summary-desc__score"><strong>${data.score}</strong> / 100</p>
//             </div>`;
//   summaryDesc.insertAdjacentHTML("afterend", html);
// };
