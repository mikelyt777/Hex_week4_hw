$(document).ready(() => {

  $('.burger').click(function(e) {
    e.preventDefault();
    $('.menu').toggleClass('active')
  })

});