Tracker.Project = DS.Model.extend({
	title: DS.attr('string'), 
	owner: DS.attr('string'),
	description: DS.attr('string'), 
	jobs: DS.hasMany('job'), 
	program: DS.belongsTo('program')
});

Tracker.Project.FIXTURES = [
	{
    id:0,
    title:"What about this",
    owner:"Jimmy",
    description:"some sort of lengthy description would be placed here about On Going Updates",
    program_id: 0
  },
  {
    id:1,
    title:"Something Else",
    owner:"Johnny",
    description:"some sort of lengthy description would be placed here about On Going Updates",
    program_id: 0
  } ,
  {
    id:2,
    title:"October Briefing",
    owner:"Joey",
    description:"some sort of lengthy description would be placed here about September Work",
    program_id: 0
  },
  {
    id:3,
    title:"New Site",
    owner:"David",
    description:"some sort of lengthy description would be placed here about Top Secret Projects",
    program_id: 0
  },
  {
    id:4,
    title:"First Project",
    owner:"Jimmy",
    description:"some sort of lengthy description would be placed here about On Going Updates",
    program_id: 1
  },
  {
    id:5,
    title:"Another Project",
    owner:"Johnny",
    description:"some sort of lengthy description would be placed here about On Going Updates",
    program_id: 1
  },
  {
    id:6,
    title:"September Work",
    owner:"Joey",
    description:"some sort of lengthy description would be placed here about September Work",
    program_id: 1
  },
  {
    id:7,
    title:"Top Secret",
    owner:"David",
    description:"some sort of lengthy description would be placed here about Top Secret Projects",
    program_id: 1
  }
];