angular.module('friendsList').controller('mainCtrl', function($scope){
$scope.friends = [
  "Mark",
  "Daren",
  "Braden",
  "Dono",
  "Brandon"
]

$scope.friendsPush = function() {
  $scope.friends.push($scope.addFriend);
  $scope.addFriend = "";
}



});
