/*$('nav li').on('click', function(){

	// $("#home").show("p");
	// $(this).text();
	$('#slide-down').hide();
	console.log($('li').text().toLowerCase());
	var id = "#" + $(this).text().toLowerCase();
	console.log(id);
	$(id).show();
}); */

$(document).ready(function() {
    $('#slide-down').dropit();
});