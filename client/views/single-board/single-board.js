
Template.singleBoard.events({
	'click [data-action]': function( e, t ) {
		e.preventDefault();

		console.log("in click event");
		console.log("e");
		console.log(e);
		console.log("t");
		console.log(t);
		console.log('hsl(' + getRandomInt(0, 360) + ',' + getRandomInt(0, 100) + '%,' + getRandomInt(0, 100) + '%)');

		Meteor.call('createColor', {
			board: t.data.board._id,
			color: 'hsl(' + getRandomInt(0, 360) + ',' + getRandomInt(0, 100) + '%,' + getRandomInt(0, 100) + '%)',
			creator: Meteor.userId(),
		});
	}
});

Template.singleBoard.helpers({
	colors: function() {
		console.log(Colors.find().fetch());
		return Colors.find();
	},
	formattedColor: function() {
		console.log("this");
		console.log(this);
		var formattedColor = tinycolor(this.color);

		switch ( Meteor.user().colorCodePref ) {
			case 'rgb':
				formattedColor = formattedColor.toRgbString();
				break;
			case 'hex':
				formattedColor = formattedColor.toHexString();
				break;
			case 'hsl':
				formattedColor = formattedColor.toHslString();
				break;
			default:
				break;
		}

		return formattedColor;

	},
	formattedDate: function() {
		var date = this.created;
		return moment(date).fromNow();
	},

});

var getRandomInt = function(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

