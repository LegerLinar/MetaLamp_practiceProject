$(function (){
  function inlineDateDropdown(uniqueId) {
    let myDatePicker = $(`#common_form_input_`+uniqueId).datepicker({
      toggleSelect: false,
      position: 'bottom center',
      // minDate: new Date(),
      autoClose: false,
      prevHtml: '<div class="arrow_prev_datepicker"></div>',
      nextHtml: '<div class="arrow_next_datepicker"></div>',
      navTitle: {
        days: '<h3> MM, yyyy</h3>'
      },
      multipleDatesSeparator: ' - ',
      inline: true,
      clearButton: true,
      range: true,
    }).data('datepicker')
    $(`#common_form_input_`+uniqueId).css('display', 'none')
    $('.datepicker--buttons').replaceWith("<div class='datepicker__ownButtons'><h3 class='datepicker__ownButtons_confirm'>Применить</h3><h3 class='datepicker__ownButtons_clear'>Очистить</h3></div>")
    $('.datepicker__ownButtons_confirm').addClass( `confirm_`+uniqueId)
    $('.datepicker__ownButtons_clear').addClass( `clear_`+uniqueId)
    $(`.clear_`+uniqueId).click(function (){
      myDatePicker.clear()
    })
    $(`.confirm_` + uniqueId).click(function(){
      myDatePicker.hide()

    })
    $(`#common_form_input_` + uniqueId).click(function () {
      $(`#more_` + uniqueId).css('display', 'none')
      $(`#less_` + uniqueId).css('display', 'block')

    }).blur(function () {
      $(`#less_` + uniqueId).css('display', 'none')
      $(`#more_` + uniqueId).css('display', 'block')

    })
  }
// stars rate
  $('.range-rate_chunk').click(function (){
    let currentRate = $(this).attr('id')
    $('#'+ currentRate).addClass('rated')
    $('#'+ currentRate).next().removeClass('rated')
    $('#'+ currentRate).nextAll().removeClass('rated')
    $('#'+ currentRate).prevAll().addClass('rated')

  })
})