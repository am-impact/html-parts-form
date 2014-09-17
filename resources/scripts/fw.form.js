if(!Modernizr.input.placeholder) {
	head.ready('cdnform', function() {
		$("[placeholder]").each(function() {
			$(this).defaultvalue();
		});
	});
}