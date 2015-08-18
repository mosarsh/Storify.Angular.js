angular.module('story').controller('EditstoryCtrl',['$scope', '$stateParams', 'storyFactory', '$state',function($scope, $stateParams, storyFactory, $state){

    function getGroups(){
        storyFactory.getGroups()
            .success(function (groups) {
                $scope.groups = groups;
                $scope.story.Group = getById(groups, parseInt($stateParams.groupId));
            })
            .error(function (error) {
                $scope.status = 'Unable to load story data: ' + error.message;
            });
    }
    function getStory() {
        storyFactory.getStory($stateParams.id)
            .success(function (story) {
                $scope.story = story;
                getGroups();
            })
            .error(function (error) {
                $scope.status = 'Unable to load story data: ' + error.message;
            });
    }

    function getById(arr, id) {
        for (var d = 0, len = arr.length; d < len; d += 1) {
            if (arr[d].GroupId === id) {
                return arr[d];
            }
        }
    }

    $scope.EditStory = function(){
        var story = $scope.story;
        story.GroupId = $scope.story.Group.GroupId;
        storyFactory.updateStory(story)
            .success(function (ok) {
                $scope.status = 'New story added';
                $state.go('storyDetail', {id:$stateParams.id});
            })
            .error(function (error) {
                $scope.status = 'Unable to load story data: ' + error.message;
            });
    };

    $scope.CancelStory = function(){
        $state.go('storyDetail', {id:$stateParams.id});
    };

    getStory();

}]);
