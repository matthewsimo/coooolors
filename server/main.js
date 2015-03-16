

// Add a default color code pref when user is created
Accounts.onCreateUser(function( options, user ) {
	user['colorCodePref'] = 'rgb';
	return user;
});

// Publish the color code pref to client
Meteor.publish("userData", function () {
	return Meteor.users.find(
		{_id: this.userId},
		{fields: {'colorCodePref': 1}}
	);
});

Meteor.publish("recentBoards", function() {
	return Boards.find();
});

Meteor.publish("boardColors", function( boardID ) {
	return Colors.find({ board: boardID });
});



Meteor.methods({

	/**
	 * Sets a users color code pref
	 */
	setUserCodePref: function( user, pref ) {

		// Just use rgb for the time being
		var validPrefs = ['rgb', 'hsl', 'hex'];
		if( _.contains( validPrefs, pref ) ) {
			return user.codePref = pref;
		} else {
			throw new Meteor.Error('invalid-color-pref', "That is an invalid Color Code Preference.");
		}

	},
	createBoard: function( boardObj ) {

		if( !Meteor.userId() ) {
			throw new Meteor.Error('must-be-logged-in', "Log in first to create boards.");
		}

		// TODO: Validate boardObj
		boardObj.creator = Meteor.userId();
		boardObj.created = boardObj.updated = new Date();
		boardObj.editors = [Meteor.userId()];

		return Boards.insert( boardObj );
		
	},
	createColor: function( colorObj ) {

		if( !Meteor.userId() ) {
			throw new Meteor.Error('must-be-logged-in', "Log in first to create boards.");
		}

		// TODO: Validate User as editor/creator of board
		colorObj.creator = Meteor.userId();

		// TODO: Validate colorObj
		colorObj.created = colorObj.updated = new Date();

		return Colors.insert( colorObj );

	}
});
