window.onload = function (){
  slideOne();
  slideTwo();
}

let sliderOne = document.getElementById('slider-1');
let sliderTwo = document.getElementById('slider-2');
let displayValOne = document.getElementById('range1');
let displayValTwo = document.getElementById('range2');
let minGap = 5;
let sliderTrack = document.querySelector('.rangeSlider_slider-track')
let sliderMaxValue = document.getElementById('slider-1').max


function slideOne(){
  if(parseInt(sliderTwo.value) - parseInt(sliderOne.value) <= minGap){
    sliderOne.value = parseInt(sliderTwo.value) - minGap;
  }
  displayValOne.textContent= sliderOne.value;
}

function slideTwo(){
  if(parseInt(sliderTwo.value) - parseInt(sliderOne.value) <=minGap){
    sliderTwo.value = parseInt(sliderOne.value) + minGap
  }
  displayValTwo.textContent = sliderTwo.value;
}

