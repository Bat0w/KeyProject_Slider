
const slider = document.querySelector('.slider');
const sliderList = slider.querySelector('.slider-list');
const slides = slider.querySelectorAll('.image');

const arrowLeft = document.querySelector('.arrow-left');
const arrowRight = document.querySelector('.arrow-right');
const dots = document.querySelectorAll('.dot');
const links = document.querySelectorAll('.link_nav');
const textCity = document.querySelectorAll('.city_text');
const textArea = document.querySelectorAll('.area_text');
const textTime = document.querySelectorAll('.time_text');

/*arrows = slider.querySelector('.slider-arrows'),
  prev = arrows.children[0],
  next = arrows.children[1],
*/

let slideIndex = 0;
let slideWidth = slides[0].offsetWidth;

// Кнопки листания слайдов вперед и назад
arrowLeft.addEventListener('click', prevSlide);
arrowRight.addEventListener('click', nextSlide);

//функция задает шаг перемещения слайдов
function showSlide () {
  sliderList.style.transition = 'transform .5s';
  sliderList.style.transform = `translateX(-${slideIndex * slideWidth}px)`;
}

//перелистываем слайды стрелками
function nextSlide() {
  slideIndex++;
  if (slideIndex >= slides.length) 
    slideIndex = 0;
    showSlide();
    moveSlide(slideIndex);
  }

function prevSlide () {
  slideIndex--;
  if (slideIndex <0) slideIndex = slides.length -1;
  showSlide();
  moveSlide(slideIndex);
}

//указываем активный слайд
function moveSlide(index) {
  dots.forEach(item => item.classList.remove('active-dot'));
  dots[index].classList.add('active-dot');
  links.forEach(item => item.classList.remove('active-link'));
  links[index].classList.add('active-link');
  textCity.forEach(item => item.classList.remove("active-text"));
  textCity[index].classList.add("active-text");
  textArea.forEach(item => item.classList.remove("active-text"));
  textArea[index].classList.add("active-text");
  textTime.forEach(item => item.classList.remove("active-text"));
  textTime[index].classList.add("active-text");
}
//обработчик на dots
dots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    slideIndex = index;
    showSlide();
    moveSlide(slideIndex);
  })
})

//обработчик на links
links.forEach((link, index) => {
  link.addEventListener('click', () => {
    slideIndex = index;
    showSlide();
    moveSlide(slideIndex);
  })
})


document.addEventListener("DOMContentLoaded", showSlide);