angular.module('Storify', ['ui.bootstrap', 'ui.utils', 'ui.router', 'ngAnimate', 'story']);

angular.module('Storify').config(function($stateProvider, $urlRouterProvider, $httpProvider) {

    $httpProvider.defaults.useXDomain = true;
    delete $httpProvider.defaults.headers.common['X-Requested-With'];

    /* Add New States Above */
    $urlRouterProvider.otherwise('/story');

});

angular.module('Storify').run(function($rootScope) {

    $rootScope.safeApply = function(fn) {
        var phase = $rootScope.$$phase;
        if (phase === '$apply' || phase === '$digest') {
            if (fn && (typeof(fn) === 'function')) {
                fn();
            }
        } else {
            this.$apply(fn);
        }
    };

});
