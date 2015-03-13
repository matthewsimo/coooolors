
Meteor.subscribe('userData');

Router.configure({
  layoutTemplate: 'layout',
  loadingTempalte: 'loading',
  notFoundTemplate: 'notFound',
});

Router.route('/', function() {
	this.render('home');
});




