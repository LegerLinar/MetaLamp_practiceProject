$(function (){
  $('.range-rate_chunk').click(function () {
    let currentRate = $(this).attr('id')
    $('#' + currentRate).addClass('rated')
    $('#' + currentRate).next().removeClass('rated')
    $('#' + currentRate).nextAll().removeClass('rated')
    $('#' + currentRate).prevAll().addClass('rated')
  })
})
