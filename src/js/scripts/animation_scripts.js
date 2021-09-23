// const flatpickr= require('flatpickr');




$(function () {
  // $(function() {
  //
  //   var container = $('.pagination');
  //   var sources = function () {
  //     var result = [];
  //
  //     for (var i = 1; i < 150; i++) {
  //       result.push(i);
  //     }
  //
  //     return result;
  //   }();
  //
  //   var options = {
  //     dataSource: sources,
  //     showPrevious: false,
  //     pageRange: 1,
  //     nextText: '',
  //     autoHidePrevious: true,
  //     autoHideNext: true,
  //     callback: function (response, pagination) {
  //       window.console && console.log(response, pagination);
  //
  //       var dataHtml = '<ul>';
  //
  //       $.each(response, function (index, item) {
  //         dataHtml += '<li>' + item + '</li>';
  //       });
  //
  //       dataHtml += '</ul>';
  //
  //       container.prev().html(dataHtml);
  //     }
  //   };
  //
  //   //$.pagination(container, options);
  //
  //   container.addHook('beforeInit', function () {
  //     window.console && console.log('beforeInit...');
  //   });
  //   container.pagination(options);
  //
  //   container.addHook('beforePageOnClick', function () {
  //     window.console && console.log('beforePageOnClick...');
  //     //return false
  //   });
  // });


//slideDown

function dropDowner(legend) { //dropdown function
  $(`#dropdown_input_` + legend).click(function () { //toggle slider
    $(`#dropdown__field_` + legend).width($(`#dropdown_input_` + legend).width()).slideToggle()
    $(`#more_` + legend).toggle()
    $(`#less_` + legend).toggle()
  })
  $(`#dropdown_input_` + legend).blur(function (){
    $(`#dropdown__field_` + legend).slideUp()
  })

  //buttons for guests
  $(`#confirm_` + legend).click(function(){
    $(`#dropdown__field_` + legend).slideToggle()

  })

  $(`#clear_` + legend).click(function (){
    firstAmount = 0;
    secondAmount = 0;
    thirdAmount = 0;
    $('#amount_1_' + legend).html(firstAmount)
    $('#amount_2_' + legend).html(secondAmount)
    $('#amount_3_' + legend).html(thirdAmount)
    $(`#dropdown_input_` + legend).val( function (){
      return ''
    })
    $(`#clear_` + legend).css({'display':'none'})
  })

  $(`#dropdown_input_` + legend).change(function() {
    $(`#clear_` + legend).toggle()
  })


  //variables inside of dropdown
  let firstAmount = 0
  let secondAmount = 0
  let thirdAmount = 0

  //calculation functions
  //first amount
  $(`#decrement_1_` + legend).click(function () {
      firstAmount--;
      if (firstAmount < 0) {
        firstAmount = 0
      }
      $(`#amount_1_` + legend).html(firstAmount)
    }
  );
  $('#increment_1_' + legend).click((function () {
      firstAmount++
      $('#amount_1_' + legend).html(firstAmount)
    }
  ))
//second Amount
  $('#decrement_2_' + legend).click(function () {
      secondAmount--;
      if (secondAmount < 0) {
        secondAmount = 0
      }
      $('#amount_2_' + legend).html(secondAmount)
    }
  );
  $('#increment_2_' + legend).click((function () {
      secondAmount++
      $('#amount_2_' + legend).html(secondAmount)
    }
  ))
  // third Amount
  $('#decrement_3_' + legend).click(function () {
      thirdAmount--;
      if (thirdAmount < 0) {
        thirdAmount = 0
      }
      $('#amount_3_' + legend).html(thirdAmount)
    }
  );
  $('#increment_3_' + legend).click((function () {
      thirdAmount++
      $('#amount_3_' + legend).html(thirdAmount)
    }
  ))

// SlideDown block-end
// Input block values
  $(`.counter_wrap_` + legend).click(function () {
    $(`#dropdown_input_` + legend).val(function () {
      if(legend.includes('rooms')) {
        function firstOption() {
          if (firstAmount >= 1) {
            return firstAmount + ' ' + $('#amount_legend_1_' + legend).html()
          }
          else {
            return ' '
          }
        }

        function secondOption() {
          if (secondAmount >= 1) {
            return secondAmount + ' ' + $('#amount_legend_2_' + legend).html()
          }
          else {
            return ' '
          }

        }

        function thirdOption() {
          if (thirdAmount >= 1) {
            return thirdAmount + ' ' + $('#amount_legend_3_' + legend).html()
          }
          else {
            return ' '
          }
        }

        if (firstAmount === 0 && secondAmount === 0 && thirdAmount === 0) {
          return 'Ничего не выбрано'
        }
        else {
          return firstOption() + ' ' + secondOption() + ' ' + thirdOption()
        }
      } else if(legend.includes('guests')){ //Block for guests output

        // block for clear button
        if(firstAmount + secondAmount + thirdAmount > 0){
          $(`#clear_` + legend).css({'display':'inline'})
        } else {
          $(`#clear_` + legend).css({'display':'none'})
        }
        //
        if (firstAmount + secondAmount + thirdAmount === 0){
          return 'Сколько гостей'
        } else {
          if(firstAmount + secondAmount + thirdAmount === 1){

            return firstAmount + secondAmount + thirdAmount + ' гость'
          } else if(firstAmount + secondAmount + thirdAmount > 4){

           return  firstAmount + secondAmount + thirdAmount + ' гостей'
          }
          return firstAmount + secondAmount + thirdAmount + ' гостя'
        }


      }

    })
  })

}

function checkboxDropDowner(itemName){
  $(`#checkbox_` + itemName).click(function () { //toggle slider
    $(`#checkbox_dropdown_field_` + itemName).slideToggle()
    $(`#more_` + itemName).toggle()
    $(`#less_` + itemName).toggle()
  })
}

//likeButton script
function likeButton(uniqueId) {
  let likesAmount = $(`#likeCount_` + uniqueId).html()
    $(`#buttonLike_` + uniqueId).click(function(){

        if($(this).hasClass('buttonLike_done')){

          likesAmount--
          $(this).removeClass('buttonLike_done')
          $(`#likeCount_` + uniqueId).html(likesAmount)

        } else {

          likesAmount++
          $(this).addClass('buttonLike_done')
          $(`#likeCount_` + uniqueId).html(likesAmount)

        }
      });


}
//datePicker scripts

function rangeDateDropdown(uniqueId) {
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
     multipleDatesSeparator: '',
    // inline: true,
     clearButton: true,
    range: true,
     toggleSelected: false,

  }).data('datepicker')
  // // $(`#common_form_input_ + uniqueId > .-range-to-`).click(function() {
  // //   $('#search_number__arriving_date_main').val($('.-range-to-').val())
  // })
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
  function birthDateDropdown(uniqueId) {
    let myDatePicker = $(`#common_form_input_` + uniqueId).datepicker({
      toggleSelect: false,
      position: 'bottom center',
      // minDate: new Date(),
      autoClose: false,
      prevHtml: '<div class="arrow_prev_datepicker"></div>',
      nextHtml: '<div class="arrow_next_datepicker"></div>',
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

//*[@id="date_example_2"]

//--------------------forms_elements scripts----------------------------------------------------------
//   dropDowner('roomsDefault');
//   dropDowner('roomsExpanded');
//   dropDowner('guestsExpanded');
//   dropDowner('guestsDefault');
//
//   checkboxDropDowner('checkbox_expandable')
//   checkboxDropDowner('checkbox_expanded')
//
//   likeButton('like_def')
//   likeButton('like_checked')
//   likeButton('like_checked_comment')
//
//   dateDropdown('date_example_1')
//   dateDropdown('date_example_2')
//   rangeDateDropdown('date-filter_example')
//-----------------------CARDS-----------------------------
//   doubleFormDateDropdown('search_number__arriving_date_main')
//   doubleFormDateDropdown('search_number__arriving_date_main', 'search_number__departure_date_main')
//   dateDropdown('roomCard__arriving_date')
//   dateDropdown('roomCard__departure_date')
//   birthDateDropdown('signup_birthdate')
//
//   dropDowner('search_number__guests_dropdown_main')
//   dropDowner('roomCard__guests_dropdown')
//   inlineDateDropdown('card_date_field')


  //----------------- Headers & Footers block ----------------------------------------------
})