window.onload = function (){
  slideOne();
  slideTwo();
}

let sliderOne = document.getElementById('slider-1');
let sliderTwo = document.getElementById('slider-2');
let displayValOne = document.getElementById('range1');
let displayValTwo = document.getElementById('range2');
let minGap = 5;
let sliderTrack = document.querySelector('.rangeSlider_slider-track');
let sliderMaxValue = document.getElementById('slider-1').max;


function slideOne(){
  if(parseInt(sliderTwo.value) - parseInt(sliderOne.value) <= minGap){
    sliderOne.value = parseInt(sliderTwo.value) - minGap;
  }
  displayValOne.textContent= Intl.NumberFormat('ru-RU').format(sliderOne.value) + '\u20bd';
  fillColor();
}


// let numPretty = new
function slideTwo(){
  if(parseInt(sliderTwo.value) - parseInt(sliderOne.value) <=minGap){
    sliderTwo.value = parseInt(sliderOne.value) + minGap
  }
  displayValTwo.textContent = Intl.NumberFormat('ru-RU').format(sliderTwo.value) + '\u20bd';
  fillColor();
}

function fillColor(){
  let percent1 = (sliderOne.value / sliderMaxValue) * 100;
  let percent2 = (sliderTwo.value / sliderMaxValue) * 100;
  sliderTrack.style.background =
    `linear-gradient(to right, rgba(255, 255, 255, 1)${percent1}%, rgba(255, 255, 255, 0) ${percent1}%, rgba(255, 255, 255, 0) ${percent2}%, rgba(255, 255, 255, 1) ${percent2}%)`;
//rgba(255, 255, 255, 0)
}

//background: linear-gradient(180deg, #6FCF97 0%, #66D2EA 100%);