const next = document.querySelector("#next_btn");
const prev = document.querySelector("#prev_btn");
const articles = document.querySelectorAll(".article");
let articles_list = [];

articles.forEach((article) => {
  articles_list.push(article);
});

let counter = 0;

const swap = [
  { transform: "translatex(-100%) scale(0)" },
  { transform: "translatex(0) scale(1)" },
];

const timing = {
  duration: 2000,
  iterations: 1,
};

next.addEventListener("click", function () {
  if (counter == 2) {
    counter = 0;
    articles_list[2].classList.toggle("article--visible");
    articles_list[counter].classList.toggle("article--visible");
    console.log(counter);
  } else if (counter > 0) {
    counter += 1;
    console.log(counter);
    articles_list[counter - 1].classList.toggle("article--visible");
    articles_list[counter].classList.toggle("article--visible");
  } else if (counter == 0) {
    counter += 1;
    articles_list[0].classList.toggle("article--visible");
    articles_list[counter].classList.toggle("article--visible");
    console.log(counter);
  }
});

prev.addEventListener("click", function () {
  if (counter == 0) {
    counter = 2;
    articles_list[0].classList.toggle("article--visible");
    articles_list[counter].classList.toggle("article--visible");
    console.log(counter);
  } else if (counter < 2) {
    counter -= 1;
    console.log(counter);
    articles_list[counter + 1].classList.toggle("article--visible");
    articles_list[counter].classList.toggle("article--visible");
  } else if (counter == 2) {
    counter -= 1;
    articles_list[2].classList.toggle("article--visible");
    articles_list[counter].classList.toggle("article--visible");
    console.log(counter);
  }
});
