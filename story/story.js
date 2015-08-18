angular.module('story', ['ui.bootstrap','ui.utils','ui.router','ngAnimate']);

angular.module('story').config(function($stateProvider) {

    $stateProvider.state('story', {
        url: '/story',
        templateUrl: 'story/partial/story/story.html',
        controller: 'StoryCtrl'
    })
        .state('storyDetail', {
        url: '^/story/:id',
        templateUrl: 'story/partial/storyDetail/storyDetail.html',
        controller: 'StorydetailCtrl'
    });

    $stateProvider.state('newStory', {
        url: '/newstory',
        templateUrl: 'story/partial/newStory/newStory.html',
        controller: 'NewstoryCtrl'
    });
    $stateProvider.state('editStory', {
        url: '/editStory/:id/:groupId',
        templateUrl: 'story/partial/editStory/editStory.html'
    });
    $stateProvider.state('groups', {
        url: '/groups',
        templateUrl: 'story/partial/groups/groups.html'
    });
    /* Add New States Above */

});

