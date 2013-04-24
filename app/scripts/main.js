require.config({
  shim: {
  	'backbone': {
  		deps: ['../components/underscore/underscore', 'jquery'],
  		exports: 'Backbone'
  	}
  },

  paths: {
    jquery: 'vendor/jquery.min',
    backbone: '../components/backbone/backbone',
    text: '../components/requirejs-text/text'
  }
});

require(['models/team', 'views/team', 'views/teams'], function(TeamModel, TeamView, TeamsView) {
  var team = new TeamModel;
  var teamView = new TeamView({ model: team });
  var teamsView = new TeamsView({ collection: teamCollection });
  $('body').append(teamsView.render().el);
});