document.addEventListener("DOMContentLoaded", function () {
  const navbarCollapse = document.getElementById("myNavbar");
  const navbarToggle = document.querySelector(".navbar-toggle");

  document.addEventListener("click", function (event) {
    const isClickInsideNavbar = navbarCollapse.contains(event.target) || navbarToggle.contains(event.target);
    const isExpanded = navbarCollapse.classList.contains("in");

    if (!isClickInsideNavbar && isExpanded) {
      // Collapse the menu
      $(navbarCollapse).collapse('hide');
    }
  });
});
