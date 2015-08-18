angular.module('story').controller('StorydetailCtrl',['$scope', '$stateParams', 'storyFactory',function($scope, $stateParams, storyFactory){

    function getStory() {
        storyFactory.getStory($stateParams.id)
            .success(function (story) {
                $scope.story = story;
            })
            .error(function (error) {
                $scope.status = 'Unable to load story data: ' + error.message;
            });
    }

    getStory();

}]);
