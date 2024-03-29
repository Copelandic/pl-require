define([
	'backbone',
	'views/team',
	'collections/teams',
	'router'
]);

function(Backbone, TeamsView, TeamsCollection, MainRouter) {
	return Backbone.View.extend({
		el: 'body',

		initialize: function() {
			new TeamsView({
				collection: new TeamsCollection(window.teams)
			});

			App.router = new MainRouter();
			Backbone.history.start();
		}
	});
});