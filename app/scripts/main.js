// Slick slider
$(document).ready(function () {
  $(".quote-container").slick({
    prevArrow:
      "<button type='button' class='slick-prev pull-left'><i class='fal fa-angle-left' aria-hidden='true'></i></button>",
    nextArrow:
      "<button type='button' class='slick-next pull-right'><i class='fal fa-angle-right' aria-hidden='true'></i></button>",
    responsive: [
      {
        breakpoint: 1023,
        settings: {
          arrows: false,
        },
      },
    ],
  });
});



const headerToggle = document.querySelector(".header-toggle")
const headerMenu = document.querySelector(".header-menu")
const container = document.querySelector(".container")

headerToggle.addEventListener("click", function(e) {
    headerMenu.classList.add("is-active")
})

window.addEventListener("click", function(e) {
   if(!headerMenu.contains(e.target) && !e.target.matches(".header-toggle")) {
        headerMenu.classList.remove("is-active")
   }
})


const aboutImages = document.querySelectorAll(".about-item")
const lightBox = document.querySelector(".light-box")
const lightBoxOverlay = document.querySelector(".light-box-overlay")
aboutImages.forEach(item => {
    item.addEventListener("click", function(e) {
        lightBox.style.display = "block"
    })
})

