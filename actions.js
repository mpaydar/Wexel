document.addEventListener("DOMContentLoaded", function () {
  const navbar = document.getElementById("myNavbar");
  const toggle = document.querySelector(".navbar-toggle");

  if (navbar && toggle) {
    // When mouse leaves the navbar, collapse it if it's open
    navbar.addEventListener("mouseleave", function () {
      if (navbar.classList.contains("in")) {
        $(navbar).collapse("hide");
      }
    });

    // Optional: Prevent multiple listeners being added on repeated clicks
    toggle.addEventListener("click", function () {
      setTimeout(() => {
        navbar.addEventListener("mouseleave", function () {
          if (navbar.classList.contains("in")) {
            $(navbar).collapse("hide");
          }
        });
      }, 100);
    });
  }
});
