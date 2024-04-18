document.addEventListener('DOMContentLoaded', function() {
  const links = document.querySelectorAll('nav ul li a');

  for (const link of links) {
      link.addEventListener('click', scrollToSection);
  }

  function scrollToSection(e) {
      e.preventDefault();
      const targetId = e.target.getAttribute('href').substring(1);
      const targetSection = document.getElementById(targetId);

      if (targetSection) {
          window.scrollTo({
              top: targetSection.offsetTop,
              behavior: 'smooth'
          });
      }
  }

  document.querySelector('a[href="#home"]').addEventListener('click', function(e) {
      e.preventDefault();
      document.querySelector('#home').scrollIntoView({
          behavior: 'smooth'
      });
  });
  
  let hamMenuIcon = document.getElementById("ham-menu");
  let navBar = document.getElementById("nav-bar");
  let navLinks = navBar.querySelectorAll("li");
  hamMenuIcon.addEventListener("click", () => {
    navBar.classList.toggle("active");
    hamMenuIcon.classList.toggle("fa-times");
  });
  navLinks.forEach((navLinks) => {
    navLinks.addEventListener("click", () => {
      navBar.classList.remove("active");
      hamMenuIcon.classList.toggle("fa-times");
    });
  });
});



// Quando o usuário clica no botão, rola suavemente para o topo da página
function scrollTopFunction() {
  const scrollToTop = () => {
    const c = document.documentElement.scrollTop || document.body.scrollTop;
    if (c > 0) {
      window.requestAnimationFrame(scrollToTop);
      window.scrollTo(0, c - c / 8);
    }
  };
  scrollToTop();
}
const mobileNav = document.querySelector(".hamburger");
const navbar = document.querySelector(".menubar");

const toggleNav = () => {
  navbar.classList.toggle("active");
  mobileNav.classList.toggle("hamburger-active");
};
mobileNav.addEventListener("click", () => toggleNav());

const body = document.querySelector("body"),
      nav = document.querySelector("nav"),
      modeToggle = document.querySelector(".dark-light"),
      searchToggle = document.querySelector(".searchToggle"),
      sidebarOpen = document.querySelector(".sidebarOpen"),
      siderbarClose = document.querySelector(".siderbarClose");
      let getMode = localStorage.getItem("mode");
          if(getMode && getMode === "dark-mode"){
            body.classList.add("dark");
          }


