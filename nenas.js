$('.dropdown').hide();   

$('.dropdown').click((e) => {
	e.preventDefault();

	if ($('.dropdown').is(':visible')){
		$('.dropdown').toggle("hide")
	}
	else{
		$('.dropdown').toggle("show")
	}

});
