$(function() {
	$(window).scroll(function(){
	    var wscroll = $(this).scrollTop();
	    if(wscroll > 50){
	     $(".navbar").addClass("shrink-nav");
	      $(".logo").addClass("shrink-logo");
	    }
	    else{
	      $(".navbar").removeClass("shrink-nav");
	      $(".logo").removeClass("shrink-logo");
	    }
	  });
});

$(document).ready(function() {
    $('.maps').click(function () {
        $('.maps iframe').css("pointer-events", "auto");
    });

    $( ".maps" ).mouseleave(function() {
      $('.maps iframe').css("pointer-events", "none");
    });
 });

 $(document).on('click','.navbar-collapse.in',function(e) {
     if( $(e.target).is('a') ) {
         $(this).collapse('hide');
     }
 });
