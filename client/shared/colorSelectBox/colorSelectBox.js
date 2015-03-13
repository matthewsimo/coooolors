Template.colorSelectBox.rendered = function() {

	var listener = new Keypress.Listener();


};


Template.colorSelectBox.helpers({

	calculateColor: function( x, y ) {
		// x = hue
		// y = lightness
		// saturation = saturation
		
	}

});


Template.colorSelectBox.events({

	'click [data-swatch]': function( e ) {
		e.preventDefault();
		console.log("in click event");
		console.log(e);
	},

	'mousemove [data-swatch]': function( e ) {
		e.preventDefault();
		console.log("in mousemove event");
		console.log(e);
	},

	'onscroll [data-swatch]': function( e ) {
		e.preventDefault();
		console.log("in scroll event");
		console.log(e);
	}

});
