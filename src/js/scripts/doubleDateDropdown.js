function doubleFormDateDropdown(startId, endId) {
  let $start = $(`#common_form_input_` + startId)
  let $end = $(`#common_form_input_` + endId)

  let myStartDatePicker = $start.datepicker({
    toggleSelect: false,
    position: 'bottom center',
    // minDate: new Date(),
    autoClose: false,
    prevHtml: '<div class="arrow_prev_datepicker"></div>',
    nextHtml: '<div class="arrow_next_datepicker"></div>',
    clearButton: true,
    range: true,
    navTitle: {
      days: '<h3> MM, yyyy</h3>'
    },
    multipleDatesSeparator: '-',
    onSelect: function (fd, d, picker) {
      $start.val(fd.split('-')[0]);
      $end.val(fd.split('-')[1]);
    }
  }).data('datepicker')

  $('.datepicker--buttons').replaceWith("<div class='datepicker__ownButtons'><h3 class='datepicker__ownButtons_confirm'>Применить</h3><h3 class='datepicker__ownButtons_clear'>Очистить</h3></div>")
  $('.datepicker__ownButtons_confirm').addClass(`confirm_` + startId)
  $('.datepicker__ownButtons_clear').addClass(`clear_` + startId)
  $(`.clear_` + startId).click(function () {
    myStartDatePicker.clear()
  })
  $(`.confirm_` + startId).click(function () {
    myStartDatePicker.hide()
  })
  $(`#common_form_input_` + startId).click(function () {
    $(`#more_` + uniqueId).css('display', 'none')
    $(`#less_` + uniqueId).css('display', 'block')

  }).blur(function () {
    $(`#less_` + startId).css('display', 'none')
    $(`#more_` + startId).css('display', 'block')

  })

  let myEndDatePicker = $end.datepicker({
    toggleSelect: false,
    position: 'bottom center',
    // minDate: new Date(),
    autoClose: false,
    prevHtml: '<div class="arrow_prev_datepicker"></div>',
    nextHtml: '<div class="arrow_next_datepicker"></div>',
    clearButton: true,
    range: true,
    navTitle: {
      days: '<h3> MM, yyyy</h3>'
    },
    multipleDatesSeparator: '-',
    onSelect: function (fd, d, picker) {
      $start.val(fd.split('-')[0]);
      $end.val(fd.split('-')[1]);
    }
  }).data('datepicker')

  $('.datepicker--buttons').replaceWith("<div class='datepicker__ownButtons'><h3 class='datepicker__ownButtons_confirm'>Применить</h3><h3 class='datepicker__ownButtons_clear'>Очистить</h3></div>")
  $('.datepicker__ownButtons_confirm').addClass(`confirm_` + endId)
  $('.datepicker__ownButtons_clear').addClass(`clear_` + endId)
  $(`.clear_` + endId).click(function () {
    myEndDatePicker.clear()
  })
  $(`.confirm_` + endId).click(function () {
    myEndDatePicker.hide()
  })
  $(`#common_form_input_` + endId).click(function () {
    $(`#more_` + uniqueId).css('display', 'none')
    $(`#less_` + uniqueId).css('display', 'block')

  }).blur(function () {
    $(`#less_` + endId).css('display', 'none')
    $(`#more_` + endId).css('display', 'block')

  })
}

export { doubleFormDateDropdown }