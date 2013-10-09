Tracker.ProgramController = Ember.ObjectController.extend({
	projectsModelChanged: function () {
		this.get('model.projects').then(function (){
			Ember.run.next(function (){
				Tracker.DraggableScript();
			});
		});
	}.observes('model.projects')
});