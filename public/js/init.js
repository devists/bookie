(function ($) {
  $(function () {

    $('.button-collapse').sideNav();
    $('.parallax').parallax();
    $('.dropdown-button-below-origin').dropdown({
      belowOrigin: true
    });
    var input = $('.datepicker').pickadate();
    var picker = input.pickadate('picker');
    picker.set('max', true);
  }); // end of document ready

  $('.book__support .material-icons').click(function (e) {
    e.preventDefault();
    var $this = $(this);
    var cardFooter = $this.closest('.card-footer');
    var id = cardFooter.closest('.card-footer').data('id');
    console.log(id);
    $.get('/requests/support/' + id, function (data) {

      if (!data.status) {
        console.log("Some error occurred");
        return;
      }
      var supportCount = cardFooter.find('.book__support span').text();
      $this.removeClass('grey-text').addClass('primary-class');
      cardFooter.find('.book__support span').text(parseInt(supportCount) + 1);
      $this.unbind();
    })
  })
})(jQuery); // end of jQuery name space