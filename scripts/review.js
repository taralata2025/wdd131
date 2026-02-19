const displayCount = document.querySelector("#review-display");
let numReviews = Number(window.localStorage.getItem("reviews-completed")) || 0;
numReviews++;
displayCount.textContent = numReviews;
localStorage.setItem("reviews-completed", numReviews);