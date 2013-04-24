define(['backbone', 'helpers', 'text!views/html/header-template.html'], function(Backbone, Helpers, Text) {
	var Team = Backbone.View.extend({
		tagName: 'ul',
		className: 'team-row',
		template: _.template( teamTemplate ),

		render: function() {
			this.$el.html( this.template(this.model.toJSON()) );
			return this;
		}
	});

	return Team;
});