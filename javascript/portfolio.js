function loading (){
  $('#head').fadeOut(700).css('display', 'none');
  $('#loading').fadeIn(700).css('display', 'block');
  $('#loading').delay(600).fadeOut(600);
  $('#mainBody').hide();
  $('#mainBody').delay(1000).fadeIn(1000);
}

$('#head_top_left').click(function(){
  loading();
})

$('#head_bottom_left').click(function(){
  loading();
})

$('#head_top_right').click(function(){
  loading();
})

$('#head_bottom_right').click(function(){
  loading();
})

$('#head_bottom').click(function(){
  loading()
})



$(window).scroll(function() {
if ($(this).scrollTop() > 300 ) {
    $('.scrolltop:hidden').stop(true, true).fadeIn();
} else {
    $('.scrolltop').stop(true, true).fadeOut();
  }
});
$(function(){
  $(".scroll").click(function(){
    $("html,body").animate(
      {scrollTop:$("#mainBody").offset().top
    },"3000");return false
  })
})

$(function(){
  $("#Nav1").click(function(){
    $("html,body").animate(
      {scrollTop:$("#top_column").offset().top
    },"5000");return false
  })
})

$(function(){
  $("#Nav2").click(function(){
    $("html,body").animate(
      {scrollTop:$("#education").offset().top
    },"5000");return false
  })
})

$(function(){
  $("#Nav3").click(function(){
    $("html,body").animate(
      {scrollTop:$("#skills").offset().top
    },"5000");return false
  })
})

$(function(){
  $("#Nav4").click(function(){
    $("html,body").animate(
      {scrollTop:$("#work").offset().top
    },"5000");return false
  })
})

$(function(){
  $("#Nav5").click(function(){
    $("html,body").animate(
      {scrollTop:$("#portfolio").offset().top
    },"5000");return false
  })
})

$(function(){
  $("#Nav6").click(function(){
    $("html,body").animate(
      {scrollTop:$("#contact").offset().top
    },"5000");return false
  })
})


$(document).ready(function() {
  var auto_slide = 1;
  var hover_pause = 2;
  var key_slide = 1;
  var auto_slide_seconds = 7000;
  $('#slides li:first').before($('#slides li:last'));
  if(auto_slide == 1){
    var timer = setInterval('slide("right")', auto_slide_seconds);
    $('#hidden_auto_slide_seconds').val(auto_slide_seconds);
  }
  if(hover_pause == 2){
    $('#slides').hover(function(){
      clearInterval(timer)
    },function(){
      timer = setInterval('slide("right")', auto_slide_seconds);
    });
  }
  if(key_slide == 1){
    $(document).bind('keypress', function(e) {
      if(e.keyCode==37){
        slide('left');
      }else if(e.keyCode==39){
        slide('right');
      }
    });
  }
});


function slide(where){
  var item_width = $('#slides li').outerWidth();
  if(where == 'left'){
    var left_indent = parseInt($('#slides').css('left')) + item_width;
  }else{
    var left_indent = parseInt($('#slides').css('left')) - item_width;
  }
  $('#slides:not(:animated)').animate({'left' :
  left_indent},7000,function(){
    if(where == 'left'){
      $('#slides li:first').before($('#slides li:last'));
    }else{
      $('#slides li:last').after($('#slides li:first'));
    }
    $('#slides').css({'left' : '0px'});
  });
}
