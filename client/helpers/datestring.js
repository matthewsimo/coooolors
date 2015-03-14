Template.registerHelper( 'msDateFromNow', function( options ) {
	return moment(options.date).format("dddd, MMMM Do YYYY, h:mm:ss a");
});
