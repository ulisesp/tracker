Tracker.Job = DS.Model.extend({
	title: DS.attr('string'), 
	owner: DS.attr('string'),
	description: DS.attr('string'), 
	tasks: DS.hasMany('task', { async: true} ), 
	project: DS.belongsTo('project')
});

Tracker.Job.FIXTURES = [
	{
    id: 0,
    title: "Initiation",
    owner: "John",
    description: "The initiating processes determine the nature and scope of the project. If this stage is not performed well, it is unlikely that the project will be successful in meeting the business’ needs. The key project controls needed here are an understanding of the business environment and making sure that all necessary controls are incorporated into the project.",
    tasks: [ 0, 31 ],
    project_id: 0
	},{
    id: 1,
    title: "Planning and design",
    owner: "Ana",
    description: "After the initiation stage, the project is planned to an appropriate level of detail. The main purpose is to plan time, cost and resources adequately to estimate the work needed and to effectively manage risk during project execution. As with the Initiation process group, a failure to adequately plan greatly reduces the project's chances of successfully accomplishing its goals.",
    tasks: [ 1, 16, 32 ],
    project_id: 0
	},{
    id: 2,
    title: "Executing",
    owner: "Edward",
    description: "Executing consists of the processes used to complete the work defined in the project plan to accomplish the project's requirements. Execution process involves coordinating people and resources, as well as integrating and performing the activities of the project in accordance with the project management plan.",
    tasks: [ 2, 17, 33 ],
    project_id: 1
	},{
    id: 3,
    title: "Closing",
    owner: "Ronald",
    description: "Closing includes the formal acceptance of the project and the ending thereof. Administrative activities include the archiving of the files and documenting lessons learned.",
    tasks: [ 3, 18, 34 ],
    project_id: 1
	},{
    id: 4,
    title: "Initiation",
    owner: "John",
    description: "The initiating processes determine the nature and scope of the project. If this stage is not performed well, it is unlikely that the project will be successful in meeting the business’ needs. The key project controls needed here are an understanding of the business environment and making sure that all necessary controls are incorporated into the project.",
    tasks: [ 4, 19, 35 ],
    project_id: 2
	},{
    id: 5,
    title: "Planning and design",
    owner: "Ana",
    description: "After the initiation stage, the project is planned to an appropriate level of detail. The main purpose is to plan time, cost and resources adequately to estimate the work needed and to effectively manage risk during project execution. As with the Initiation process group, a failure to adequately plan greatly reduces the project's chances of successfully accomplishing its goals.",
    tasks: [ 5, 20, 36 ],
    project_id: 3
	},{
    id: 6,
    title: "Executing",
    owner: "Edward",
    description: "Executing consists of the processes used to complete the work defined in the project plan to accomplish the project's requirements. Execution process involves coordinating people and resources, as well as integrating and performing the activities of the project in accordance with the project management plan.",
    tasks: [ 6, 21, 37 ],
    project_id: 4
	},{
    id: 7,
    title: "Closing",
    owner: "Ronald",
    description: "Closing includes the formal acceptance of the project and the ending thereof. Administrative activities include the archiving of the files and documenting lessons learned.",
    tasks: [ 7, 22, 38 ],
    project_id: 4
	},{
    id: 8,
    title: "Initiation",
    owner: "John",
    description: "The initiating processes determine the nature and scope of the project. If this stage is not performed well, it is unlikely that the project will be successful in meeting the business’ needs. The key project controls needed here are an understanding of the business environment and making sure that all necessary controls are incorporated into the project.",
    tasks: [ 8, 23 ],
    project_id: 5
	},{
    id: 9,
    title: "Planning and design",
    owner: "Ana",
    description: "After the initiation stage, the project is planned to an appropriate level of detail. The main purpose is to plan time, cost and resources adequately to estimate the work needed and to effectively manage risk during project execution. As with the Initiation process group, a failure to adequately plan greatly reduces the project's chances of successfully accomplishing its goals.",
    tasks: [ 9, 24 ],
    project_id: 5
	},{
    id: 10,
    title: "Executing",
    owner: "Edward",
    description: "Executing consists of the processes used to complete the work defined in the project plan to accomplish the project's requirements. Execution process involves coordinating people and resources, as well as integrating and performing the activities of the project in accordance with the project management plan.",
    tasks: [ 10, 25 ],
    project_id: 5
	},{
    id: 11,
    title: "Closing",
    owner: "Ronald",
    description: "Closing includes the formal acceptance of the project and the ending thereof. Administrative activities include the archiving of the files and documenting lessons learned.",
    tasks: [ 11, 26 ],
    project_id: 6
	},{
    id: 12,
    title: "Initiation",
    owner: "John",
    description: "The initiating processes determine the nature and scope of the project. If this stage is not performed well, it is unlikely that the project will be successful in meeting the business’ needs. The key project controls needed here are an understanding of the business environment and making sure that all necessary controls are incorporated into the project.",
    tasks: [ 12, 27 ],
    project_id: 6
	},{
    id: 13,
    title: "Planning and design",
    owner: "Ana",
    description: "After the initiation stage, the project is planned to an appropriate level of detail. The main purpose is to plan time, cost and resources adequately to estimate the work needed and to effectively manage risk during project execution. As with the Initiation process group, a failure to adequately plan greatly reduces the project's chances of successfully accomplishing its goals.",
    tasks: [ 13, 28 ],
    project_id: 6
	},{
    id: 14,
    title: "Executing",
    owner: "Edward",
    description: "Executing consists of the processes used to complete the work defined in the project plan to accomplish the project's requirements. Execution process involves coordinating people and resources, as well as integrating and performing the activities of the project in accordance with the project management plan.",
    tasks: [ 14, 29 ],
    project_id: 7
	},{
    id: 15,
    title: "Closing",
    owner: "Ronald",
    description: "Closing includes the formal acceptance of the project and the ending thereof. Administrative activities include the archiving of the files and documenting lessons learned.",
    tasks: [ 15, 30 ],
    project_id: 7
	}
];