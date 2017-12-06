$('#head_top_left').click(function() {
  $('#head').fadeOut(2000).css('display', 'none');
  $('#loading').fadeIn(1000).css('display', 'block');
  $('#loading').delay(2000).fadeOut(2000);
  $('#mainBody').hide();
  $('#mainBody').delay(3000).fadeIn(3000);
})

$('#head_bottom_left').click(function() {
  $('#head').fadeOut(2000).css('display', 'none');
  $('#loading').fadeIn(1000).css('display', 'block');
  $('#loading').delay(2000).fadeOut(2000);
  $('#mainBody').hide();
  $('#mainBody').delay(3000).fadeIn(3000);
})

$('#head_top_right').click(function() {
  $('#head').fadeOut(2000).css('display', 'none');
  $('#loading').fadeIn(1000).css('display', 'block');
  $('#loading').delay(2000).fadeOut(2000);
  $('#mainBody').hide();
  $('#mainBody').delay(3000).fadeIn(3000);
})

$('#head_bottom_right').click(function() {
  $('#head').fadeOut(2000).css('display', 'none');
  $('#loading').fadeIn(1000).css('display', 'block');
  $('#loading').delay(2000).fadeOut(2000);
  $('#mainBody').hide();
  $('#mainBody').delay(3000).fadeIn(3000);
})

$('#head_bottom').click(function() {
  $('#head').fadeOut(2000).css('display', 'none');
  $('#loading').fadeIn(1000).css('display', 'block');
  $('#loading').delay(2000).fadeOut(2000);
  $('#mainBody').hide();
  $('#mainBody').delay(3000).fadeIn(3000);
})


$(window).scroll(function() {
if ($(this).scrollTop() > 50 ) {
    $('.scrolltop:hidden').stop(true, true).fadeIn();
} else {
    $('.scrolltop').stop(true, true).fadeOut();
}
});
$(function(){$(".scroll").click(function(){$("html,body").animate({scrollTop:$(".thetop").offset().top},"1000");return false})})
