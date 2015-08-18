angular.module('story').controller('StoryCtrl',['$scope', 'storyFactory', '$state', '$modal', function($scope, storyFactory, $state, $modal){

    function getStories() {
        storyFactory.getStories()
            .success(function (stories) {
                $scope.stories = stories;
            })
            .error(function (error) {
                $scope.status = 'Unable to load story data: ' + error.message;
            });
    }


   $scope.DeleteStory = function (story) {

       var modalInstance = $modal.open({
           templateUrl: 'story/partial/modal/modal.html',
           scope: $scope,
           controller: 'ModalCtrl',
           resolve: {
               name: function() {return story.Title;},
               id: function () {return story.StoryId;}
           }
       });

       modalInstance.result.then(function (opts) {
               if (opts.doDelete === true) {
                   storyFactory.deletStory(opts.id)
                       .success(function (ok) {

                           $state.go($state.current, {}, {reload: true});
                       })
                       .error(function (error) {
                           $scope.status = 'Unable to load story data: ' + error.message;
                       });
               }
           });
    };

    getStories();
}]);
