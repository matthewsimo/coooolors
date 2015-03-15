Template.colorSelectBox.rendered = function() {
	var listener = new Keypress.Listener();

	listener.simple_combo("=", function() {
		modifySaturation(5);
	});

	listener.simple_combo("+", function() {
		modifySaturation(10);
	});

	listener.simple_combo("-", function() {
		modifySaturation(-5);
	});

	listener.simple_combo("_", function() {
		modifySaturation(-10);
	});
};


// Init Colors to rebecca purple
Session.set('x', 270);
Session.set('y', 50);
Session.set('saturation', 40);

var calculateColor = function( event ) {

	var height = event.currentTarget.clientHeight;
	var width  = event.currentTarget.clientWidth;

	// hue =  x = ( cursor pos / width ) * 100
	Session.set('x', ( event.offsetX / width ) * 360 );
	Session.set('y', ( event.offsetY / height ) * 100 );

};

var modifySaturation = function( modification ) {
	var saturation = Session.get('saturation');
	saturation = saturation + modification;

	// validate bounds 0 min & 100 max
	saturation = saturation <= 0 ? 0 : saturation;
	saturation = saturation >= 100 ? 100 : saturation;

	Session.set('saturation', saturation );

};


Template.colorSelectBox.helpers({

	calculatedColor: function() {
		// x = hue
		// y = lightness
		// saturation = saturation
		
		return " x: " + Session.get('x') + ", y: " +  Session.get('y') + " - saturation: " + Session.get('saturation');
	},
	colorInHSL: function() {
		return "hsl(" + Session.get('x') + "," + Session.get('y') + "%," + Session.get('saturation') + "%)";
	}

});


Template.colorSelectBox.events({

	'click [data-swatch]': function( e ) {
		e.preventDefault();
		console.log("in click event");
		console.log(e);
		console.log("this");
		console.log(this);

		Meteor.call('createColor', {
			color: "hsl(" + Session.get('x') + "," + Session.get('y') + "%," + Session.get('saturation') + "%)",
			board: this.board._id
		});

	},

	'mousemove [data-swatch]': function( e ) {
		e.preventDefault();

		calculateColor( e );

	},

	'onscroll [data-swatch]': function( e ) {
		e.preventDefault();
		console.log("in scroll event");
		console.log(e);
	}

});
