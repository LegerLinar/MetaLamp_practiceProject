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
function dropDowner(legend) { //dropdown function
  $(`#dropdown_` + legend).click(function () { //toggle slider
    $(`.dropdown__field_` + legend).slideToggle()
  });

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
    $(`#dropdown_` + legend).val(function () {
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


      if (firstOption() == undefined && secondOption() == undefined && thirdOption() == undefined) {
        return 'Ничего не выбрано'
      }
      else {
        return firstOption() + ' ' + secondOption() + ' ' + thirdOption()
      }
    })
  })
}

dropDowner('field')

})