Tracker.Program = DS.Model.extend({
	title: DS.attr('string'), 
	owner: DS.attr('string'),
	description: DS.attr('string'), 
	projects: DS.hasMany('project')
});

Tracker.Program.FIXTURES = [
  {
    id:0,
    title:"On Going Updates",
    owner:"Jimmy",
    description:"some sort of lengthy description would be placed here about On Going Updates"
  },
  {
    id:1,
    title:"Commentary",
    owner:"Susy",
    description:"some sort of lengthy description would be placed here about Monthly Commentary"
  }
];