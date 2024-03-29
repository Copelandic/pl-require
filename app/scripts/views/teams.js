define(['backbone', 'views/team', 'text!views/html/header-template.html'], function(Backbone, Team, headerTemplate) {
	return Backbone.View.extend({
		className: 'teams',
		header: _.template( headerTemplate ),

		initialize : function() {
			console.log( this.collection );
			this.listenTo( this.collection, 'sort', this.render );
		},

		render: function() {
			this.$el.html( this.header() );
			this.collection.each(function(team) {
				var teamView = new Team({ model: team });
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
});