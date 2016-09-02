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

// $('.nav-hamburger').click((e) =>{
// 	e.preventDefault();
// 	console.log('hello');

// 	if ($('.nav-hamburger').is(':visible')){
// 		$('.navbar-collapse').toggle("hide")
// 	}
// 	else{
// 		$('.navbar-collapse').toggle("show")
// 	}

// });




// $('.carousel').carousel({
// 		interval: 3000
// 	})
