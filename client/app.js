
Meteor.subscribe('userData');

Router.configure({
  layoutTemplate: 'layout',
  loadingTempalte: 'loading',
  notFoundTemplate: 'notFound',
});

Router.route('/', function() {

	this.render('home');
});

Router.route('/board/:_id', function() {
	var board = Boards.findOne({_id: this.params._id});

	Meteor.subscribe('boardColors', this.params._id );

	this.render('singleBoard', {data: { board: board }});
});

Router.route('/sign-up', function() {
	this.render('signUp');
});



