  function paginator(uniqueId) {
    var container = $('#'+ uniqueId);
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
  }

  export { paginator}