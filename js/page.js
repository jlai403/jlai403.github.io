//$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
//Fade
//$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
$(document).ready(function (){
	$('#fade').hide().fadeIn(1500);
});

$(function(){
	$('a.navlink').click(function(e){
	    e.preventDefault();
	    linkLocation = $(this).attr('href');
	    $('#fade').fadeOut(500, function(){
	    	redirectPage(linkLocation)
	    });  
	});
});

function redirectPage(link) {
    document.location.href=link;
}

//$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
//modal link click
//$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
$(function(){
	$('a#modal_link').click(function(e){
	    $('#modal').css("opacity", "1");
	    $('#modal').css("z-index", "999"); //to prevent icon overlays from showing
	});
});

$(function(){
	$('a#modal_link_close').click(function(e){
		$('#modal').css("opacity", "0");
		$('#modal').css("z-index", "-1"); //to allow nav and icon overlays
	});
});

$(document).keyup(function(e) {
	  if (e.keyCode == 27) {	// esc
		  $('#modal_link_close').click();
	  }   
});

$('html').click(function(e){
	if($(e.target).parent().index($('#modal')) == -1) {
		if($('#modal').css('opacity') == '1') {
			$('#modal').css("opacity", "0");
			$('#modal').css("z-index", "-1");
		}
	}
});