define(['backbone', 'helpers'], function(Backbone, Helpers) {
	var Team = Backbone.View.extend({
		tagName: 'ul',
		className: 'team-row',
		template: template('teamTemplate'),

		initialize : function() {
			this.listenTo( this.collection, 'sort', this.render );
		},

		render: function() {
			this.$el.html( this.template(this.model.toJSON()) );
			return this;
		}
	});
});