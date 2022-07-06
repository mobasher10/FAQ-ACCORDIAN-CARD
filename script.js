// "use strict";
// const questionsBtn = document.querySelectorAll(".question__div");
// const answersBtn = document.querySelectorAll(" .answers");

// const cardContent = document.querySelector(".card__content");
// const arrowImage = document.querySelectorAll(".arrow__down-image");
// const questionHeader = document.querySelectorAll(".text");
// const questionNumbers = document.querySelectorAll(".questions");

// //CALAAMAD

// for (let i = 0; i < questionsBtn.length; i++) {
//   questionsBtn[i].addEventListener("click", function (e) {
//     questionsBtn[i].classList.toggle("active__class");

//     questionsBtn[i].classList.toggle("active__class");
//   });
// }

// //CALAAMAD
// questionDiv.for
const questionsBtn = document.querySelectorAll(".questions");
const cardContent = document.querySelector(".card__content");
questionsBtn.forEach((question) => {
  question.addEventListener("click", () => {
    question.classList.toggle("active__class");
    const acordianaAnswer = question.nextElementSibling;
    if (question.classList.contains("active__class")) {
      acordianaAnswer.style.display = "block";
      cardContent.style.overflowY = "scroll";
    } else {
      acordianaAnswer.style.display = "none";
    }
  });
});

//COMMENT

// const questionsBtn = document.querySelectorAll(".questions");

// for (i = 0; i < questionsBtn.length; i++) {
//   questionsBtn[i].addEventListener("click", function () {
//     this.classList.toggle("active__class");
//   });
// }

// const accordion = document.getElementsByClassName("container");

// for (i = 0; i < accordion.length; i++) {
//   accordion[i].addEventListener("click", function () {
//     this.classList.toggle("active");
//   });
// }
