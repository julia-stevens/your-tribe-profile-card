// DESKTOP ITEMS CONTENT WINDOWS appear when DESKTOP ITEM CLICKED
var figure1 = document.querySelector("#figure1");
var desktopItems = document.querySelector("#item1");

figure1.addEventListener("click", function () {
  desktopItems.classList.toggle("active")
});

var figure2 = document.querySelector("#figure2");
var desktopItems2 = document.querySelector("#item2");

figure2.addEventListener("click", function () {
  desktopItems2.classList.toggle("active")
});

var figure3 = document.querySelector("#figure3");
var desktopItems3 = document.querySelector("#item3");

figure3.addEventListener("click", function () {
  desktopItems3.classList.toggle("active")
});

var figure4 = document.querySelector("#figure4");
var desktopItems4 = document.querySelector("#item4");

figure4.addEventListener("click", function () {
  desktopItems4.classList.toggle("active")
});

var figure5 = document.querySelector("#figure5");
var desktopItems5 = document.querySelector("#item5");

figure5.addEventListener("click", function () {
  desktopItems5.classList.toggle("active")
});

var figure6 = document.querySelector("#figure6");
var desktopItems6 = document.querySelector("#item6");

figure6.addEventListener("click", function () {
  desktopItems6.classList.toggle("active")
});

// DESKTOP ITEMS CONTENT ANIMATION TRIGGER when BUTTON MAIN WINDOW CLICKED
var buttonMainWindow = document.querySelector("#window-main-button");

buttonMainWindow.addEventListener("click", function () {
  figure1.classList.toggle("clicked")
  figure2.classList.toggle("clicked")
  figure3.classList.toggle("clicked")
  figure4.classList.toggle("clicked")
  figure5.classList.toggle("clicked")
  figure6.classList.toggle("clicked")
});

// ANIMATION TRIGGER HOVER DESKTOP ICONS
figure1.addEventListener("click", function () {
  figure1.classList.toggle("active")
});

figure2.addEventListener("click", function () {
  figure2.classList.toggle("active")
});

figure3.addEventListener("click", function () {
  figure3.classList.toggle("active")
});

figure4.addEventListener("click", function () {
  figure4.classList.toggle("active")
});

figure5.addEventListener("click", function () {
  figure5.classList.toggle("active")
});

figure6.addEventListener("click", function () {
  figure6.classList.toggle("active")
});

// ANIMATION TRIGGER DESKTOP ITEMS
item1.addEventListener("click", function () {
  item1.classList.toggle("clicked")
});

item2.addEventListener("click", function () {
  item2.classList.toggle("clicked")
});

item3.addEventListener("click", function () {
  item3.classList.toggle("clicked")
});

item4.addEventListener("click", function () {
  item4.classList.toggle("clicked")
});

item5.addEventListener("click", function () {
  item5.classList.toggle("clicked")
});

item6.addEventListener("click", function () {
  item6.classList.toggle("clicked")
});

// WINDOW CHANGES COLOR WHEN red, orange or green BUTTON CLICKED
var buttonRed = document.querySelector("#buttonRed");
var windowBackground = document.querySelector("#opened-window")

buttonRed.addEventListener("click", function () {
  windowBackground.classList.toggle("activeRed")
});

var buttonOrange = document.querySelector("#buttonOrange");

buttonOrange.addEventListener("click", function () {
  windowBackground.classList.toggle("activeOrange")
});

var buttonGreen = document.querySelector("#buttonGreen");

buttonGreen.addEventListener("click", function () {
  windowBackground.classList.toggle("activeGreen")
});