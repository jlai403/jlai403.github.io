$(document).ready(function (){
	$('#main-content').css('opacity', '0').fadeTo(1500, 1,'swing'); 
});

$(function(){
	$('a.navlink').click(function(e){
	    e.preventDefault();
	    linkLocation = $(this).attr('href');
	    $('#main-content').fadeOut(1500, function(){
	    	redirectPage(linkLocation)
	    });  
	});
});

function redirectPage(link) {
    document.location.href=link;
}
