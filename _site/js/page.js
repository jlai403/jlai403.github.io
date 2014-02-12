$(document).ready(function (){
	$('#main-content').hide().fadeIn(1500);
});

$(function(){
	$('a.navlink').click(function(e){
	    e.preventDefault();
	    linkLocation = $(this).attr('href');
	    $('#main-content').fadeOut(500, function(){
	    	redirectPage(linkLocation)
	    });  
	});
});

function redirectPage(link) {
    document.location.href=link;
}
