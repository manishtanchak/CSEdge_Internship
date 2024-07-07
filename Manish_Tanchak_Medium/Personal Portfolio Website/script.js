document.getElementById('mobileMenu').addEventListener('click', function() {
  var menu = document.getElementById('menu');
  menu.classList.toggle('active');    
});

const scrollUp = document.querySelector("#scroll-up");

scrollUp.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if(entry.isIntersecting){
      entry.target.classList.add('show');
    }
  });
});

const hiddenElement = document.querySelectorAll('section');
hiddenElement.forEach((el) => observer.observe(el));