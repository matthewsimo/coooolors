
Template.singleBoard.events({
	'click [data-action]': function( e, t ) {
		e.preventDefault();

		console.log("in click event");
		console.log("e");
		console.log(e);
		console.log("t");
		console.log(t);
		console.log('rgb( ' + getRandomInt(0, 256) + ',' + getRandomInt(0, 256) + ',' + getRandomInt(0, 256) + ')');

		var date = moment();

		Meteor.call('createColor', {
			board: t.data.board._id,
			color: 'rgb(' + getRandomInt(0, 256) + ',' + getRandomInt(0, 256) + ',' + getRandomInt(0, 256) + ')',
			created: date,
			creator: Meteor.userId(),
			update: date,
		});
	}
});

Template.singleBoard.helpers({
	colors: function() {
		return Colors.find();
	}
});

var getRandomInt = function(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

