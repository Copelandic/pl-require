define(['backbone', 'models/team'], function(Backbone, TeamModel) {
	return Backbone.Collection.extend({
		model: TeamModel,

		initialize : function(){
		 	this.sortedValue = 'points';
		},

		comparator : function(model) {
			return -model.get(this.sortedValue);
		},

		sortedBy : function( val ) {
			this.sortedValue = val;
			this.sort();
		}
	});
});