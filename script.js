$(document).ready(function () {
  $(window).scroll(function () {
    //  sticky navbar on scroll script  //
    if (this.scrollY > 20) {
      $(".navbar").addClass("sticky");
    } else {
      $(".navbar").removeClass("sticky");
    }

    //  scroll-up button show/hide script  //
    if (this.scrollY > 500) {
      $(".scroll-up-btn").addClass("show");
    } else {
      $(".scroll-up-btn").removeClass("show");
    }
  });

  //  slide-up script  //

  $(".scroll-up-btn").click(function () {
    $("html").animate({ scrollTop: 0 });
    //  removing smooth scroll on slide-up button click  //
    $("html").css("scrollBehavior", "auto");
  });

  $(".navbar .menu li a").click(function () {
    //  Smooth scroll on Menu Items click  //

    $("html").css("scrollBehavior", "smooth");
  });

  //  Toggle Navbar  //

  $(".menu-btn").click(function () {
    $(".navbar .menu").toggleClass("active");
    $(".menu-btn i").toggleClass("active");
  });

  //  Typing Text Animation  //

  var typed = new Typed(".typing", {
    strings: [
      "Backend Developer",
      "Software Engineer",
    ],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
  });

  $(".carousel").owlCarousel({
    margin: 20,
    loop: true,
    autoplay: true,
    autoplayTimeOut: 2000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
        nav: false
      },
      600: {
        items: 2,
        nav: false
      },
      1000: {
        items: 3,
        nav: false
      }
    }
  });
});


document.addEventListener("DOMContentLoaded", function () {
  // List of image file names
  const imageList = ["me/az1.jpg", "me/az2.jpg", "me/az3.jpg", "me/az4.jpg", "me/az5.jpg"];

  // Get the current image index from local storage or set it to 0 if not available
  let currentIndex = parseInt(localStorage.getItem("imageIndex")) || 0;

  // Get the image element by its id
  const profileImage = document.getElementById("profile-image");

  // Set the source of the image to the current image in the list
  profileImage.src = "assets/" + imageList[currentIndex];

  // Increment the image index for the next page load
  currentIndex = (currentIndex + 1) % imageList.length;

  // Store the updated image index in local storage
  localStorage.setItem("imageIndex", currentIndex.toString());
});
