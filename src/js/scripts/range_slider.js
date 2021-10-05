
// function rangeSliderMaker(uniqueId)
var sliderOne = document.getElementById('slider-1');
var sliderTwo = document.getElementById('slider-2');
var displayValOne = document.getElementById('range1');
var displayValTwo = document.getElementById('range2');
var minGap = 5;
var sliderTrack = document.getElementById('rangeSlider_slider-track');
var sliderMaxValue = document.getElementById('slider-1').max;

// document.getElementById('slider-1').addEventListener('input', slideOne)

let slideOne = function(){
  if (parseInt(sliderTwo.value) - parseInt(sliderOne.value) <= minGap) {
    sliderOne.value = parseInt(sliderTwo.value) - minGap;
  }
  displayValOne.textContent = Intl.NumberFormat('ru-RU').format(sliderOne.value) + '\u20bd';
  fillColor();
}


// let numPretty = new
let slideTwo = function(){
  if (parseInt(sliderTwo.value) - parseInt(sliderOne.value) <= minGap) {
    sliderTwo.value = parseInt(sliderOne.value) + minGap
  }
  displayValTwo.textContent = Intl.NumberFormat('ru-RU').format(sliderTwo.value) + '\u20bd';
  fillColor();
}

function fillColor(){
  let percent1 = Math.round((sliderOne.value / sliderMaxValue
  ) * 100);
  let percent2 = Math.round((sliderTwo.value / sliderMaxValue
  ) * 100);
  sliderTrack.style.background = `linear-gradient(to right, rgba(255, 255, 255, 1) ${percent1}%, rgba(255, 255, 255, 0) ${percent1}%, rgba(255, 255, 255, 0) ${percent2}%, rgba(255, 255, 255, 1) ${percent2}%)`;
//rgba(255, 255, 255, 0)
}

window.onload = function () {
  slideOne();
  slideTwo();
  document.getElementById('slider-1').addEventListener('input', slideOne)
  document.getElementById('slider-2').addEventListener('input', slideTwo)
}
//background: linear-gradient(180deg, #6FCF97 0%, #66D2EA 100%);