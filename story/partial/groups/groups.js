angular.module('story').controller('GroupsCtrl',['$scope', '$stateParams', 'storyFactory',function($scope, $stateParams, storyFactory){

    function getGroups(){
        storyFactory.getGroups()
            .success(function (groups) {
                $scope.groups = groups;
            })
            .error(function (error) {
                $scope.status = 'Unable to load story data: ' + error.message;
            });
    }

    getGroups();
}]);
