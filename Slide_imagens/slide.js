const slides = document.getElementsByClassName("slide");
let slideIndex = 0;
let autoSlideInterval;

function showSlide(n) {
  if (n !== slideIndex) {
    slides[slideIndex].classList.remove("active");
    slides[n].classList.add("active");
    clearInterval(autoSlideInterval);
    autoSlideInterval = setInterval(() => nextSlide(), 3000);
    slideIndex = n;
  }
}

function nextSlide() {
  let nextIndex = slideIndex + 1;
  
  if (nextIndex >= slides.length) {
    nextIndex = 0;
  }
  
  showSlide(nextIndex);
}

function previousSlide() {
  let prevIndex = slideIndex - 1;
  
  if (prevIndex < 0) {
    prevIndex = slides.length - 1;
  }
  
  showSlide(prevIndex);
}

// Event listeners para os botões
document.querySelector(".next-slide").addEventListener("click", () => {
  nextSlide();
});

document.querySelector(".prev-slide").addEventListener("click", () => {
  previousSlide();
});

// Iniciar o slide automático
autoSlideInterval = setInterval(() => nextSlide(), 3000);

// Exibir o primeiro slide
showSlide(slideIndex);

//DISPLAY
d1.addEventListener('click', () => {
    d1.classList.add("active")
    d2.classList.remove("active")
    d3.classList.remove("active")
    slide.classList.remove("display-two");
    slide.classList.remove("display-three");
});

d2.addEventListener('click', () => {
    d1.classList.remove("active")
    d2.classList.add("active")
    d3.classList.remove("active")
    slide.classList.add("display-two");
    slide.classList.remove("display-three");
});

d3.addEventListener ('click', () => {
    d1.classList.remove("active")
    d2.classList.remove("active")
    d3.classList.add("active")
    slide.classList.add("display-three");
});
