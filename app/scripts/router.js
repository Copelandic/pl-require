define(['backbone'], function(Backbone) {
	var Main = Backbone.Router.extend({
		routes: {
			'': 'index'
		},

		index: function() {
			console.log( 'the index page' );
		}
	});

	return Main;
});