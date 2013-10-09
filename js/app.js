window.Tracker = Ember.Application.create();

Tracker.ApplicationAdapter = DS.FixtureAdapter.extend();

Tracker.DraggableScript = function (){
	$('.widget-container-span').sortable({
    connectWith: '.widget-container-span',
    items:'> .widget-box',
    opacity:0.8,
    revert:true,
    forceHelperSize:true,
    placeholder: 'widget-placeholder',
    forcePlaceholderSize:true,
    tolerance:'pointer'
	});
};