(function ($) {
  $(function () {

    $('.button-collapse').sideNav();
    $('.parallax').parallax();
    var input = $('.datepicker').pickadate();
    var picker = input.pickadate('picker');
    picker.set('max', true);
  }); // end of document ready
})(jQuery); // end of jQuery name space