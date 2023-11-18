/*!
    * Start Bootstrap - Agency v6.0.2 (https://startbootstrap.com/template-overviews/agency)
    * Copyright 2013-2020 Start Bootstrap
    * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-agency/blob/master/LICENSE)
    */
    (function ($) {
    "use strict"; // Start of use strict

    // Smooth scrolling using jQuery easing
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
        if (
            location.pathname.replace(/^\//, "") ==
                this.pathname.replace(/^\//, "") &&
            location.hostname == this.hostname
        ) {
            var target = $(this.hash);
            target = target.length
                ? target
                : $("[name=" + this.hash.slice(1) + "]");
            if (target.length) {
                $("html, body").animate(
                    {
                        scrollTop: target.offset().top - 72,
                    },
                    1000,
                    "easeInOutExpo"
                );
                return false;
            }
        }
    });

    // Closes responsive menu when a scroll trigger link is clicked
    $(".js-scroll-trigger").click(function () {
        $(".navbar-collapse").collapse("hide");
    });

    // Activate scrollspy to add active class to navbar items on scroll
    $("body").scrollspy({
        target: "#mainNav",
        offset: 74,
    });

    // Collapse Navbar
    var navbarCollapse = function () {
        if ($("#mainNav").offset().top > 100) {
            $("#mainNav").addClass("navbar-shrink");
        } else {
            $("#mainNav").removeClass("navbar-shrink");
        }
    };
    // Collapse now if page is not at top
    navbarCollapse();
    // Collapse the navbar when page is scrolled
    $(window).scroll(navbarCollapse);
})(jQuery); // End of use strict




// Settings

const items = ["an Engineer", "a Aesthetic voyager", "a Dreamer", "a Learner","a Traveller", "an Adventurer"];
const delSpeed = 55;
const typeSpeed = 200;
const targetElm = ".type";

// Code

let index = 0; // index of array
let charIndex = 0; // index of character in string

function typing() {
  if (index === items.length) {
    index = 0;
    setTimeout(typing, typeSpeed);
  } else if (charIndex >= items[index].length + 1) {
    setTimeout(deleteTxt, delSpeed);
  } else if (charIndex < items[index].length + 1) {
    const addChar = items[index].substr(-items[index].length, charIndex);
    document.querySelector(targetElm).innerHTML = addChar;
    charIndex += 1;
    setTimeout(typing, typeSpeed);
  }
}

function deleteTxt() {
  if (charIndex >= 0) {
    const delChar = items[index].substr(-items[index].length, charIndex);
    document.querySelector(targetElm).innerHTML = delChar;
    charIndex -= 1;
    setTimeout(deleteTxt, delSpeed);
  } else if (index <= items.length - 1) {
    index += 1;
    typing();
  } else {
    typing();
  }
}

typing();





class Slider {
  constructor() {
    this.pictures = [];
    this.picturesCount = 0;
    this.play = true;
    this.pictureInterval = 5000;
  }

  setPictures(pictures) {
    this.pictures = pictures;
    this.picturesCount = pictures.length;
    this.createSliderButtons();
  }

  init() {
    if (this.play) {
      setInterval(() => {
         this.changePicture(null);
      }, this.pictureInterval);
    }
  }
  
  createSliderButtons() {
    let sliderButtons = document.querySelector("#slider-buttons");
    for (let i = 0; i < this.pictures.length; i++) {
      var circle = document.createElement("div");
      circle.setAttribute("id", i);
      circle.classList.add("circle");
      circle.addEventListener("click", () => {
        this.changePicture(i);
      });
      sliderButtons.prepend(circle);
    }
  }
  
  changePicture(attribute) {
    let slider = document.querySelector("#slider");
    let picture = document.querySelector(".picture");
    var newPic = document.createElement("img");

    let picture_old = document.querySelector(".picture-fade-out");
    if (picture_old) {
      picture_old.parentNode.removeChild(picture_old);
    }
    if (attribute == null) {
      this.picturesCount += 1;
      if (this.picturesCount > this.pictures.length - 1) {
        this.picturesCount = 0;
      }
      attribute = this.picturesCount;
    }
    
    newPic.src = this.pictures[attribute];
    newPic.classList.add("picture");
    newPic.classList.add("picture-fade-in");
    slider.prepend(newPic);
    
    picture.classList.add("picture-fade-out");
    picture.classList.remove("picture-fade-in");
  }
}

let slider2 = new Slider();
pictures = [
  "assets/img/My Photography/bg1.jpg",
  "assets/img/My Photography/bg2.jpg",
  "assets/img/My Photography/bg3.jpg",
  "assets/img/My Photography/bg4.jpg",
  "assets/img/My Photography/bg5.jpg",
  "assets/img/My Photography/bg6.jpg",
  "assets/img/My Photography/bg7.jpg",
  "assets/img/My Photography/bg8.jpg",
  "assets/img/My Photography/bg9.jpg",
  "assets/img/My Photography/bg10.jpg",
  "assets/img/My Photography/bg11.jpg",
  
];
slider2.setPictures(pictures);
slider2.init();















