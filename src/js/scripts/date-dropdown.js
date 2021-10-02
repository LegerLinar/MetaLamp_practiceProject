$(function (){
  function dateDropdown(uniqueId) {
    let myDatePicker = $(`#common_form_input_` + uniqueId).datepicker({
      toggleSelect: false,
      position: 'bottom center',
      // minDate: new Date(),
      autoClose: false,
      prevHtml: '<div class="arrow_prev_datepicker"></div>',
      nextHtml: '<div class="arrow_next_datepicker"></div>',
      minDate: new Date(),
      clearButton: true,
      navTitle: {
        days: '<h3> MM, yyyy</h3>'
      },
      multipleDatesSeparator: ' - ',
    }).data('datepicker')
    $('.datepicker--buttons').replaceWith("<div class='datepicker__ownButtons'><h3 class='datepicker__ownButtons_confirm'>Применить</h3><h3 class='datepicker__ownButtons_clear'>Очистить</h3></div>")
    $('.datepicker__ownButtons_confirm').addClass(`confirm_` + uniqueId)
    $('.datepicker__ownButtons_clear').addClass(`clear_` + uniqueId)
    $(`.clear_` + uniqueId).click(function () {
      myDatePicker.clear()
    })
    $(`.confirm_` + uniqueId).click(function () {
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
})