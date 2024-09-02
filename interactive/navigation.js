document.getElementById("home-nav").addEventListener("click", function () {
  document
    .getElementById("home-section")
    .scrollIntoView({ behavior: "smooth" });
  setActiveNav("home-nav");
});

document.getElementById("about-nav").addEventListener("click", function () {
  document
    .getElementById("about-section")
    .scrollIntoView({ behavior: "smooth" });
  setActiveNav("about-nav");
});

document.getElementById("text-logo").addEventListener("click", function () {
  document
    .getElementById("home-section")
    .scrollIntoView({ behavior: "smooth" });
  setActiveNav("text-logo");
});

document.getElementById("login-nav").addEventListener("click", function () {
  const loginOverlay = document.getElementById("login-overlay");
  loginOverlay.classList.add("active");
  loginOverlay.classList.remove("exit");
});

document.addEventListener("click", function (event) {
  const loginOverlay = document.getElementById("login-overlay");
  const loginContainer = document.querySelector(".login-container");

  if (loginOverlay.classList.contains("active") && !loginContainer.contains(event.target) && event.target.id !== 'login-nav') {
    loginOverlay.classList.add("exit");
    loginOverlay.addEventListener('transitionend', function() {
      if (loginOverlay.classList.contains("exit")) {
        loginOverlay.classList.remove("active", "exit");
      }
    }, { once: true });
  }
});

function setActiveNav(activeId) {
  const navItems = document.querySelectorAll(".right-section div");
  navItems.forEach((item) => {
    if (item.id === activeId) {
      item.classList.add("active");
    } else {
      item.classList.remove("active");
    }
  });
}

const options = {
  root: null,
  rootMargin: "0px",
  threshold: 0.5,
};

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      if (entry.target.id === "home-section") {
        setActiveNav("home-nav");
      } else if (entry.target.id === "about-section") {
        setActiveNav("about-nav");
      }
    }
  });
}, options);

observer.observe(document.getElementById("home-section"));
observer.observe(document.getElementById("about-section"));