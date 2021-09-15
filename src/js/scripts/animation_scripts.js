// const flatpickr= require('flatpickr');


$(function () {
  $(function() {

    var container = $('.pagination');
    var sources = function () {
      var result = [];

      for (var i = 1; i < 150; i++) {
        result.push(i);
      }

      return result;
    }();

    var options = {
      dataSource: sources,
      showPrevious: false,
      pageRange: 1,
      nextText: '',
      autoHidePrevious: true,
      autoHideNext: true,
      callback: function (response, pagination) {
        window.console && console.log(response, pagination);

        var dataHtml = '<ul>';

        $.each(response, function (index, item) {
          dataHtml += '<li>' + item + '</li>';
        });

        dataHtml += '</ul>';

        container.prev().html(dataHtml);
      }
    };

    //$.pagination(container, options);

    container.addHook('beforeInit', function () {
      window.console && console.log('beforeInit...');
    });
    container.pagination(options);

    container.addHook('beforePageOnClick', function () {
      window.console && console.log('beforePageOnClick...');
      //return false
    });
  });


//slideDown

function dropDownerRooms(legend) { //dropdown function
  $(`#dropdown_input_` + legend).click(function () { //toggle slider
    $(`#dropdown__field_` + legend).slideToggle()
    $(`#more_` + legend).toggle()
    $(`#less_` + legend).toggle()
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

function pickDateDropdown(uniqueId){
  $(`#common_form_input_` + uniqueId).flatpickr(
    {
      minDate: "today",
      "locale": "ru",
      dateFormat: "d.m.Y",
      input: 'ДД.ММ.ГГГГ',
      onOpen: [ $(`#more_` + uniqueId).toggle(),
        $(`#less_` + uniqueId).toggle()
      ],
      onClose: [ $(`#more_` + uniqueId).toggle(),
        $(`#less_` + uniqueId).toggle()]
    }
  )

}

dropDownerRooms('roomsDefault');
dropDownerRooms('roomsExpanded');
dropDownerRooms('guestsExpanded');
dropDownerRooms('guestsDefault');

checkboxDropDowner('checkbox_expandable')
checkboxDropDowner('checkbox_expanded')

likeButton('like_def')
likeButton('like_checked')
likeButton('like_checked_comment')

  pickDateDropdown('date_example_1')
  pickDateDropdown('date_example_2')
})