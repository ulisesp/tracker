Tracker.Task = DS.Model.extend({
	title: DS.attr('string'), 
	owner: DS.attr('string'),
	description: DS.attr('string'), 
	job: DS.belongsTo('job')
});

Tracker.Task.FIXTURES = [
	{
		id: 0, 
		title: "Business needs and requirements",
		owner: "Mary",
		description: "Analyzing the business needs/requirements in measurable goals", 
		job_id: 0
	},{
		id: 1, 
		title: "Stakeholder analysis",
		owner: "Oscar",
		description: "Including users, and support personnel for the project", 
		job_id: 1
	},{
		id: 2, 
		title: "Project Charter",
		owner: "John",
		description: "including costs, tasks, deliverables, and schedule", 
		job_id: 2
	},{
		id: 3, 
		title: "Scope",
		owner: "Ana",
		description: "Developing the scope statement", 
		job_id: 3
	},{
		id: 4, 
		title: "Planning team",
		owner: "Ana",
		description: "Selecting the members of the team", 
		job_id: 4
	},{
		id: 5, 
		title: "Schedule",
		owner: "Ana",
		description: "Developing the schedule", 
		job_id: 5
	},{
		id: 6, 
		title: "Budget",
		owner: "Berta",
		description: "Developing the budget for the project", 
		job_id: 6
	},{
		id: 7, 
		title: "Risk",
		owner: "Ana",
		description: "Recognize risks and make contingency plan", 
		job_id: 7
	},{
		id: 8, 
		title: "Execution management",
		owner: "Edward",
		description: "Direct and manage project execution", 
		job_id: 8
	},{
		id: 9, 
		title: "Quality assurance",
		owner: "Tom",
		description: "Make sure the deliverables are made acording to the standards", 
		job_id: 9
	},{
		id: 10, 
		title: "Testing",
		owner: "Edward",
		description: "Test the deliverables against the initial design"	, 
		job_id: 10
	},{
		id: 11, 
		title: "Contract closure",
		owner: "Rondald",
		description: "Complete and settle each contract (including the resolution of any open items) and close each contract applicable to the project or project phase.", 
		job_id: 11
	},{
		id: 12, 
		title: "Project close",
		owner: "Edward",
		description: "Finalize all activities across all of the process groups to formally close the project or a project phase.", 
		job_id: 12
	},{
		id: 13, 
		title: "Business needs and requirements",
		owner: "Mary",
		description: "Analyzing the business needs/requirements in measurable goals", 
		job_id: 13
	},{
		id: 14, 
		title: "Stakeholder analysis",
		owner: "Oscar",
		description: "Including users, and support personnel for the project", 
		job_id: 14
	},{
		id: 15, 
		title: "Project Charter",
		owner: "John",
		description: "including costs, tasks, deliverables, and schedule", 
		job_id: 15
	},{
		id: 16, 
		title: "Scope",
		owner: "Ana",
		description: "Developing the scope statement", 
		job_id: 1
	},{
		id: 17, 
		title: "Planning team",
		owner: "Ana",
		description: "Selecting the members of the team", 
		job_id: 2
	},{
		id: 18, 
		title: "Schedule",
		owner: "Ana",
		description: "Developing the schedule", 
		job_id: 3
	},{
		id: 19, 
		title: "Budget",
		owner: "Berta",
		description: "Developing the budget for the project", 
		job_id: 4
	},{
		id: 20, 
		title: "Risk",
		owner: "Ana",
		description: "Recognize risks and make contingency plan", 
		job_id: 5
	},{
		id: 21, 
		title: "Execution management",
		owner: "Edward",
		description: "Direct and manage project execution", 
		job_id: 6
	},{
		id: 22, 
		title: "Quality assurance",
		owner: "Tom",
		description: "Make sure the deliverables are made acording to the standards", 
		job_id: 7
	},{
		id: 23, 
		title: "Testing",
		owner: "Edward",
		description: "Test the deliverables against the initial design"	, 
		job_id: 8
	},{
		id: 24, 
		title: "Contract closure",
		owner: "Rondald",
		description: "Complete and settle each contract (including the resolution of any open items) and close each contract applicable to the project or project phase.", 
		job_id: 9
	},{
		id: 25, 
		title: "Project close",
		owner: "Edward",
		description: "Finalize all activities across all of the process groups to formally close the project or a project phase.", 
		job_id: 10
	},{
		id: 26, 
		title: "Business needs and requirements",
		owner: "Mary",
		description: "Analyzing the business needs/requirements in measurable goals", 
		job_id: 11
	},{
		id: 27, 
		title: "Stakeholder analysis",
		owner: "Oscar",
		description: "Including users, and support personnel for the project", 
		job_id: 12
	},{
		id: 28, 
		title: "Project Charter",
		owner: "John",
		description: "including costs, tasks, deliverables, and schedule", 
		job_id: 13
	},{
		id: 29, 
		title: "Scope",
		owner: "Ana",
		description: "Developing the scope statement", 
		job_id: 14
	},{
		id: 30, 
		title: "Planning team",
		owner: "Ana",
		description: "Selecting the members of the team", 
		job_id: 15
	},{
		id: 31, 
		title: "Schedule",
		owner: "Ana",
		description: "Developing the schedule", 
		job_id: 0
	},{
		id: 32, 
		title: "Budget",
		owner: "Berta",
		description: "Developing the budget for the project", 
		job_id: 1
	},{
		id: 33, 
		title: "Risk",
		owner: "Ana",
		description: "Recognize risks and make contingency plan", 
		job_id: 2
	},{
		id: 34, 
		title: "Execution management",
		owner: "Edward",
		description: "Direct and manage project execution", 
		job_id: 3
	},{
		id: 35, 
		title: "Quality assurance",
		owner: "Tom",
		description: "Make sure the deliverables are made acording to the standards", 
		job_id: 4
	},{
		id: 36, 
		title: "Testing",
		owner: "Edward",
		description: "Test the deliverables against the initial design", 
		job_id: 5
	},{
		id: 37, 
		title: "Contract closure",
		owner: "Rondald",
		description: "Complete and settle each contract (including the resolution of any open items) and close each contract applicable to the project or project phase.", 
		job_id: 6
	},{
		id: 38, 
		title: "Project close",
		owner: "Edward",
		description: "Finalize all activities across all of the process groups to formally close the project or a project phase.", 
		job_id: 7
	}
];