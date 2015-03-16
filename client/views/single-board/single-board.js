
Template.singleBoard.events({
	'click [data-action]': function( e, t ) {
		e.preventDefault();

		// Create random color
		Meteor.call('createColor', {
			board: t.data.board._id,
			color: 'hsl(' + getRandomInt(0, 360) + ',' + getRandomInt(0, 100) + '%,' + getRandomInt(0, 100) + '%)',
			creator: Meteor.userId(),
		});
	}
});

Template.singleBoard.helpers({
	colors: function() {
		return Colors.find();
	},
	formattedColor: function() {
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
		return moment(this.created).fromNow();
	},

});

var getRandomInt = function(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

