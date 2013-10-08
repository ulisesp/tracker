Tracker.Router.map( function(){
	this.resource('about');
	this.resource('programs', { path: '/'}, function () {
		this.resource('program', { path: 'programs/:program_id'});
	});
});

Tracker.ProgramsRoute = Ember.Route.extend({
	model: function () {
		return this.store.find('program');
	}
});

Tracker.ProgramRoute = Ember.Route.extend({
	model: function (params) {
		console.debug(this.store.find('program', params.program_id))
		return this.store.find('program', params.program_id);
	}
});