
  window.addEventListener("scroll", function () {
    const navbar = document.querySelector(".sticky-navbar");
    if (window.scrollY > 30) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });

