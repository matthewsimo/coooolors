

Meteor.subscribe('recentBoards');


//Template.home.rendered = function() {
//
//	var listener = new Keypress.Listener();
//
//	listener.simple_combo("c", function() {
//		console.log("Change color code pref");
//	});
//
//	listener.simple_combo("n", function() {
//		console.log("New color swatch");
//	});
//
//	listener.simple_combo("?", function() {
//		console.log("Toggle Info");
//	});
//
//
//	listener.simple_combo("up", function() {
//		console.log("Change saturation up");
//	});
//
//	listener.simple_combo("down", function() {
//		console.log("Change saturation down");
//	});
//
//};


Template.home.events({
	'click [data-action]': function( e ) {
		e.preventDefault();

		console.log("in click data-action button");
		console.log("e");
		console.log(e);

		Meteor.call('createBoard', {
			title: "Example Board - " + ( Boards.find().fetch().length + 1 ),
			slug: "example-board-" + ( Boards.find().fetch().length + 1 ),
			visibility: true
		});
		
	}
});


Template.home.helpers({
	recentPublicBoards: function() {
		return Boards.find({},{});
	}
});
