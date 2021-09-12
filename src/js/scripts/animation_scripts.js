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

    $(`.dropdown__input`).click(function () {
      $(`.dropdown__field`).slideToggle()
    });

    let firstAmount = 0
    let secondAmount = 0
    let thirdAmount = 0


    $(`#decrement_1`).click(function () {
        firstAmount--;
        if (firstAmount < 0) {
          firstAmount = 0
        }
        $(`#amount_1`).html(firstAmount)
      }
    );
    $('#increment_1').click((function () {
      firstAmount++
      $('#amount_1').html(firstAmount)
    }
    ))
//second Amount
    $('#decrement_2').click(function () {
        secondAmount--;
        if (secondAmount < 0) {
          secondAmount = 0
        }
        $('#amount_2').html(secondAmount)
      }
    );
    $('#increment_2').click((function () {
      secondAmount++
      $('#amount_2').html(secondAmount)
    }
    ))
    // third Amount
    $('#decrement_3').click(function () {
        thirdAmount--;
        if (thirdAmount < 0) {
          thirdAmount = 0
        }
        $('#amount_3').html(thirdAmount)
      }
    );
    $('#increment_3').click((function () {
      thirdAmount++
      $('#amount_3').html(thirdAmount)
    }
    ))

// SlideDown block-end

    $('.counter_wrap').click(function () {
      $('.dropdown__input').val(function () {
        function firstOption() {
          if (firstAmount >= 1) {
            return firstAmount + ' ' + $('#amount_legend_1').html()
          } else {
            return ' '
          }


        }

        function secondOption() {
          if (secondAmount >= 1) {
            return secondAmount + ' ' + $('#amount_legend_2').html()
          } else {
            return ' '
          }

        }

        function thirdOption() {
          if (thirdAmount >= 1) {
            return thirdAmount + ' ' + $('#amount_legend_3').html()
          } else {
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




})