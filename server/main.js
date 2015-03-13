

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



Meteor.methods({

	/**
	 * Sets a users color code pref
	 */
	setUserCodePref: function( user, pref ) {

		// Just use rgb for the time being
		var validPrefs = ['rgb'];//, 'rgba', 'hsl', 'hsla', 'hex'];
		if( _.contains( validPrefs, pref ) ) {
			return user.codePref = pref;
		} else {
			throw new Meteor.Error('invalid-color-pref', "That is an invalid Color Code Preference.");
		}

	}
});
