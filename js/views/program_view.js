Tracker.ProgramView = Ember.View.extend({
	didInsertElement: function () {
		Ember.run.next(function (){
			Tracker.DraggableScript();
		});
	}
});