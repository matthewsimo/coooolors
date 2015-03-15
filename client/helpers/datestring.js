Template.registerHelper( 'msDateFromNow', function( options ) {
	console.log("options: ");
	console.log(options);
	return moment().format("dddd, MMMM Do YYYY, h:mm:ss a");
//	return moment(options.hash.date.parse()).format("dddd, MMMM Do YYYY, h:mm:ss a");
});
