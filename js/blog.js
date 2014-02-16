$(function(){
	$('a.blogItem').click(function(e){
//	    e.preventDefault();
	    $('#modal').css("opacity", "1");
	    $('#modal').css("z-index", "999"); //to prevent icon overlays from showing
	});
});

$(function(){
	$('a#resume_link_close').click(function(e){
//		e.preventDefault();
		$('#resume_wrapper').css("opacity", "0");
		$('#resume_wrapper').css("z-index", "-1"); //to allow nav and icon overlays
	});
});

$(document).keyup(function(e) {
	  if (e.keyCode == 27) {	// esc
		  $('#resume_link_close').click();
	  }   
});