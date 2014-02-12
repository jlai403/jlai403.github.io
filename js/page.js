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
