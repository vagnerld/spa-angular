var app = angular.module('app', ['ngRoute']);

// configure our routes
app.config(function($routeProvider) {	
    $routeProvider

        // rotas da nossa SPA

        // route home page
        .when('/', {
            templateUrl : 'app/views/home.html',
            controller  : 'homeController'
        })

        // route about page
        .when('/about', {
            templateUrl : 'app/views/about.html',
            controller  : 'aboutController'
        })

        // route contact page
        .when('/contact', {
            templateUrl : 'app/views/contact.html',
            controller  : 'contactController'
        })
        .otherwise({
		    redirectTo: "/"
		});
});