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

///////////////////////////////////////////////////////////
// Image links

var links = [
  "https://omnifood-junayed.netlify.app/",
  "/project/natours",
  "/project/nexter",
];

var imgBoxes = document.querySelectorAll(".project-img-box");
imgBoxes.forEach(function (imgBox, index) {
  imgBox.addEventListener("click", function () {
    window.open(links[index], "_blank");
  });
});

///////////////////////////////////////////////////////////
// Make mobile navigation work
const headerEl = document.querySelector(".header");
const navBtnEl = document.querySelector(".btn-mobile-nav");

navBtnEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});

///////////////////////////////////////////////////////////
// Smooth scrolling animation
// Contains all the links inside the header and main, excluding those in the footer.
const allLinks = document.querySelectorAll(
  "a:link:not(footer a:link):not(.project-text-box a:link)"
);

allLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const href = link.getAttribute("href");

    // scroll back to top
    if (href === "#")
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

    // Scroll to other links
    if (href !== "#" && href.startsWith("#")) {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({ behavior: "smooth" });
    }

    // Close mobile navigation when a nav links that all have .main-nav-link class is clicked
    // Check if the link element contain main-nav-link class
    if (link.classList.contains("main-nav-link")) {
      headerEl.classList.toggle("nav-open");
    }
  });
});

///////////////////////////////////////////////////////////
// Sticky navigation
/* As soon as the .section-hero section moves out of the viewport the sticky navigation will appear */
const sectionHeroEl = document.querySelector(".section-hero");

// Specify some html element to observe
// entries array for each threshold values we have only one
const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    console.log(ent);
    if (ent.isIntersecting === false) {
      document.body.classList.add("sticky");
    }
    // When hero is visible or intersecting in the viewport remove class
    if (ent.isIntersecting) {
      document.body.classList.remove("sticky");
    }
  },
  {
    // Observe in the viewport (null = viewport)
    root: null,
    /* get an event as soon as hero section completely moves out of the viewport */
    threshold: 0,
    // Adding some negative margin to viewport (sticky nav height = 80px )
    rootMargin: "-80px",
  }
);
// Observe some html element
obs.observe(sectionHeroEl);

///////////////////////////////////////////////////////////
// Fixing flexbox gap property missing in some Safari versions
function checkFlexGap() {
  var flex = document.createElement("div");
  flex.style.display = "flex";
  flex.style.flexDirection = "column";
  flex.style.rowGap = "1px";

  flex.appendChild(document.createElement("div"));
  flex.appendChild(document.createElement("div"));

  document.body.appendChild(flex);
  var isSupported = flex.scrollHeight === 1;
  flex.parentNode.removeChild(flex);
  console.log(isSupported);

  if (!isSupported) document.body.classList.add("no-flexbox-gap");
}
checkFlexGap();
