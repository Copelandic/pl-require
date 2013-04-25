define(['backbone', 'helpers', 'text!views/html/team-template.html'], function(Backbone, Helpers, teamTemplate) {
	return Backbone.View.extend({
		tagName: 'ul',
        className: 'team-row',
        template: _.template( teamTemplate ),

        render: function() {
            this.$el.html( this.template(this.model.toJSON()) );
            return this;
        }
    });
});