angular.module('story').factory('storyFactory',['$http', function($http) {

	var storyFactory = {};
    var urlBase = 'http://localhost/Storify/api';

    storyFactory.getStories = function(){
        return $http.get(urlBase + '/story');
    };

    storyFactory.getStory = function(id){
        return $http.get(urlBase + '/story/' + id);
    };

    storyFactory.insertStory = function(story){
        return $http.post(urlBase+ '/story/', story);
    };

    storyFactory.updateStory = function(story){
        return $http.put(urlBase + '/story/' + story.StoryId, story);
    };

    storyFactory.deletStory = function(id){
        return $http.delete(urlBase + '/story/' + id);
    };

    storyFactory.getGroups = function(){
        return $http.get(urlBase + '/group');
    };

	return storyFactory;
}]);
