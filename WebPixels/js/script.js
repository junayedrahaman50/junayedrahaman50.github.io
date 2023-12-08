var projectTexts = document.querySelectorAll(".project-description");
var mainTexts = document.querySelectorAll(".main-text");
var readMoreBtns = document.querySelectorAll(".read-more");
var readLessBtns = document.querySelectorAll(".read-less");
var textArray = [];
var shortTextArray = [];

mainTexts.forEach(function (mainText) {
  textArray.push(mainText.textContent);
});
mainTexts.forEach(function (mainText) {
  var originalText = mainText.textContent;
  var limitedText = originalText.substring(0, 200) + "...";
  shortTextArray.push(limitedText);
});

// handle read more/less logic
function handleRead() {
  projectTexts.forEach(function (projectText, index) {
    var readMore = projectText.querySelector(".read-more");
    var readLess = projectText.querySelector(".read-less");
    var mainText = projectText.querySelector(".main-text");
    readMore.addEventListener("click", function () {
      mainText.textContent = textArray[index];
      readLess.style.display = "inline";
      readMore.style.display = "none";
    });

    readLess.addEventListener("click", function () {
      mainText.textContent = shortTextArray[index];
      readLess.style.display = "none";
      readMore.style.display = "inline";
    });
  });
}

function handleResize() {
  var thresholdWidth = 656;
  var viewportWidth = window.innerWidth;
  if (viewportWidth <= thresholdWidth) {
    readMoreBtns.forEach(function (readMore) {
      readMore.style.display = "inline";
    });

    readLessBtns.forEach(function (readLess) {
      readLess.style.display = "none";
    });

    mainTexts.forEach(function (mainText, index) {
      mainText.textContent = textArray[index].substring(0, 200) + "...";
    });
  } else {
    readMoreBtns.forEach(function (readMore) {
      readMore.style.display = "none";
    });

    readLessBtns.forEach(function (readLess) {
      readLess.style.display = "none";
    });

    mainTexts.forEach(function (mainText, index) {
      mainText.textContent = textArray[index];
    });
  }
}

// handle resize is called when widow is resized
// window.addEventListener("resize", handleResize);

handleResize();
handleRead();

///////////////////////////////////////////////////////////
// Set current year
var yearEl = document.querySelector(".year");
var currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;
