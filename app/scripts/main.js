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

require(['models/team', 'views/team', 'views/teams', 'collections/teams'], function(TeamModel, TeamView, TeamsView, teamCollection) {
  var team = new TeamModel;
  var teamView = new TeamView({ model: team });
  var teamData = new teamCollection( window.teams );
  var teamsView = new TeamsView({ collection: teamData });
  $('body').append(teamsView.render().el);
});