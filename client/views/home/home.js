Template.home.rendered = function() {

	var listener = new Keypress.Listener();

	listener.simple_combo("c", function() {
		console.log("Change color code pref");
	});

	listener.simple_combo("n", function() {
		console.log("New color swatch");
	});

	listener.simple_combo("?", function() {
		console.log("Toggle Info");
	});


	listener.simple_combo("up", function() {
		console.log("Change saturation up");
	});

	listener.simple_combo("down", function() {
		console.log("Change saturation down");
	});

};
