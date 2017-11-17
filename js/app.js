(function(){
	'use strict';

	angular.module('LunchCheck',[])
	.controller('LunchCheckController', LunchCheckController);

	LunchCheckController.$inject = ['$scope'];
	
	function LunchCheckController($scope){

		$scope.checkLunch = function(){
			var lCount = 0; 

			if($scope.dishes){
				// Only get items in the list, do not count sequential or trailing commas
				lCount = $scope.dishes.replace(/^[,\s]+|[,\s]+$/g, '').replace(/,[,\s]*,/g, ',').replace(/,+$/, "").split(/\s*,\s*/).length;
			};
			

			// Output the message based on results of above logic
			if(lCount == 0){
				$scope.messageOutput = "Please enter data first"; // Nothing entered
			}
			else if(lCount < 4){
				$scope.messageOutput = "Enjoy!"; // 1-3 items
			}
			else{
				$scope.messageOutput = "Too Much!"; // More than 3 items
			}
		}

	}; 

})();