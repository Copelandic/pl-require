define(['backbone', 'views/team'], function(Backbone, Team) {
	var TeamsView = Backbone.View.extend({
		className: 'teams',
		header: template('headerTemplate'),

		initialize : function() {
			this.listenTo( this.collection, 'sort', this.render );
		},

		render: function() {
			this.$el.html( this.header() );
			this.collection.each(function(team) {
				var teamView = new App.Views.Team({ model: team });
				this.$el.append(teamView.render().el);
			}, this);

			return this;
		},
		events : {
			'click .option' : 'sortedBy'
		},

		sortedBy : function(event) {
			var type = $(event.target).attr('data-type');
			this.collection.sortedBy( type );
		}
	});
	return TeamsView;
});