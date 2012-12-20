function AddressCtrl($scope) {
	$scope.people = [
		{
			name: "Yona",
			email: "hypher@gmail.com"
		}
	];

	// Holds data for the person being added
	$scope.newPerson = {};

	$scope.removePerson = function(personToRemove){
		var oldPeople = $scope.people;
		$scope.people = [];

		oldPeople.forEach(function(person){
			if (person != personToRemove) {
				$scope.people.push(person);
			}
		})
	};

	$scope.addPerson = function(){
		$scope.people.push($scope.newPerson);
		$scope.newPerson = {}
	}
}