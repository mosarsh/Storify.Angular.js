angular.module('story').controller('NewstoryCtrl',['$scope','storyFactory', '$state', function($scope, storyFactory, $state){


    function getGroups(){
        storyFactory.getGroups()
            .success(function (groups) {
            $scope.groups = groups;
        })
            .error(function (error) {
                $scope.status = 'Unable to load story data: ' + error.message;
            });
    }
    $scope.AddStory = function(){
        //$scope.submitted = true;
        var story = $scope.story;
        story.GroupId = $scope.story.Group.GroupId;
        storyFactory.insertStory(story)
            .success(function (ok) {
                $scope.status = 'New story added';
                $state.go("story");
            })
            .error(function (error) {
                $scope.status = 'Unable to load story data: ' + error.message;
            });
    };

    getGroups();
}]);
