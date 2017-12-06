$('#head_top_left').click(function() {
  $('#head').fadeOut(1000).css('display', 'none');
  $('#loading').fadeIn(1000).css('display', 'block');
  $('#loading').delay(1000).fadeOut(1000).css('display', 'block');
  $('#mainBody').fadeIn(1000).css('display', 'block');
})

$('#head_bottom_left').click(function() {
  $('#head').css('display', 'none');
  $('#mainBody').css('display', 'block');
})

$('#head_top_right').click(function() {
  $('#head').css('display', 'none');
  $('#mainBody').css('display', 'block');
})

$('#head_bottom_right').click(function() {
  $('#head').css('display', 'none');
  $('#mainBody').css('display', 'block');
})


$(window).scroll(function() {
if ($(this).scrollTop() > 50 ) {
    $('.scrolltop:hidden').stop(true, true).fadeIn();
} else {
    $('.scrolltop').stop(true, true).fadeOut();
}
});
$(function(){$(".scroll").click(function(){$("html,body").animate({scrollTop:$(".thetop").offset().top},"1000");return false})})
