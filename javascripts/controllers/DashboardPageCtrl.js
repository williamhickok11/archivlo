"use strict";
app.controller("DashboardPageCtrl", function($scope, $rootScope, HypothesisFactory, AnnotationFactory, ProjectFactory){
	$scope.projects = [];
	$scope.annotations = [];
	$scope.projectsToEdit = {};
	ProjectFactory.getProjectList($rootScope.user.uid).then( (projects)=>{
		$scope.projects = projects;
		$rootScope.projectsArray = projects;
		console.log("projects", $scope.projects);
	});
	AnnotationFactory.getAnnotationList($rootScope.user.uid).then( (annotations)=>{
		$scope.annotations = annotations;
		$rootScope.annotationsArray = annotations;
		console.log("annotations", $scope.annotations);
	});

 	// HypothesisFactory.searchHypothesis($rootScope.user.hypothesisUsername).then( (testResponse)=>{
 	// 	console.log("testResponse", testResponse);

 	// 	let responses = testResponse[0];
 	// 	let test = responses[0];
 	// 	console.log("test", test.document.title);
 	// 	let newAnnotation = {
 	// 		title: test.document.title,
 	// 		projectId: "project0",
 	// 		text: test.text,
 	// 		uri: test.uri,
 	// 		html: test.links.html,
 	// 		incontext: test.links.incontext,
 	// 		json: test.links.json,
 	// 		tags: test.tags,
 	// 		created: test.created,
 	// 		updated: test.updated,
 	// 		user: test.user,
 	// 		group: test.group,
 	// 		id: test.id,
 	// 		uid: $rootScope.user.uid
 	// 	}
 	// 	console.log("newAnnotation", newAnnotation);
 	// 	AnnotationFactory.postNewAnnotation(newAnnotation).then( (postNewResponse)=>{
 	// 		console.log("postNewResponse", postNewResponse);
 	// 	});
 		// groupTest = responses[0];
 		// console.log("groupTest", groupTest.group);
 		// let userAccount = groupTest.user;
 		// HypothesisFactory.getHypothesisJson(groupTest).then( (groupResponse)=>{
 		// 	console.log("groupResponse", groupResponse);
 		// });
 		
		
 		
 	// });
 	// console.log("groupTest", groupTest.group);
});