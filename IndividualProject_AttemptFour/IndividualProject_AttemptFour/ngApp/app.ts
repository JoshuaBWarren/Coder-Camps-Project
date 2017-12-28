/// <reference path="../scripts/typings/angularjs/angular-route.d.ts" />
namespace MyApp {

    angular.module('MyApp', ['ngRoute', 'ngResource', 'uiGmapgoogle-maps','ui.bootstrap']).config(($routeProvider: ng.route.IRouteProvider, $locationProvider: ng.ILocationProvider, uiGmapGoogleMapApiProvider: any) => {
        uiGmapGoogleMapApiProvider.configure({
            // key: 'your api key',

        });
        $routeProvider
            .when('/', {
                templateUrl: '/ngApp/views/home.html',                  //Landing page
                controller: MyApp.Controllers.HomeController,
                controllerAs: 'controller'
            })
            .when('/about', {
                templateUrl: '/ngApp/views/about.html',                  //Landing page
                controller: MyApp.Controllers.HomeController,
                controllerAs: 'controller'
            })
            .when('/addReview', {
                templateUrl: '/ngApp/views/addReview.html',             //Page where the member can add a review to my site.
                controller: MyApp.Controllers.AddReviewController,      
                controllerAs: 'controller'
            })
            .when('/editReview/:id', {
                templateUrl: '/ngApp/views/editReview.html',            //Page where the member can edit their own review of my site.
                controller: MyApp.Controllers.EditReviewController,
                controllerAs: 'controller'
            })
            .when('/deleteReview/:id', {
                templateUrl: '/ngApp/views/deleteReview.html',          //Page where the member can delete their own review of my site.
                controller: MyApp.Controllers.DeleteReviewController,
                controllerAs: 'controller'
            })
            .when('/searchReview', {  //Learn how to do a search using Google Maps
                templateUrl: '/ngApp/views/searchReview.html',          //Page where the member can search for reviews using external databases.
                controller: MyApp.Controllers.SearchReviewController,
                controllerAs: 'controller'
            })
            .when('/login', {
                templateUrl: '/ngApp/views/login.html',                 //Login page.
                controller: MyApp.Controllers.LoginController,
                controllerAs: 'controller'
            })
            .when('/register', {
                templateUrl: '/ngApp/views/register.html',              //Register for an account page.
                controller: MyApp.Controllers.RegisterController,
                controllerAs: 'controller'
            })
            .when('/externalLogin', {
                templateUrl: '/ngApp/views/externalLogin.html',         
                controller: MyApp.Controllers.ExternalLoginController,
                controllerAs: 'controller'
            })
            .when('/externalRegister', {
                templateUrl: '/ngApp/views/externalRegister.html',
                controller: MyApp.Controllers.ExternalRegisterController,
                controllerAs: 'controller'
            })
            .when('/confirmEmail', {
                templateUrl: '/ngApp/views/confirmEmail.html',
                controller: MyApp.Controllers.ConfirmEmailController,
                controllerAs: 'controller'
            })
            .otherwise({
                redirectTo: '/ngApp/views/notFound.html'
            });

        $locationProvider.html5Mode(true);
    });

    angular.module('MyApp').factory('authInterceptor', (
        $q: ng.IQService,
        $window: ng.IWindowService,
        $location: ng.ILocationService
    ) =>
        ({
            request: function (config) {
                config.headers = config.headers || {};
                let token = $window.sessionStorage.getItem('token');
                if (token) {
                    config.headers.Authorization = 'Bearer ' + token;
                }
                return config;
            },
            response: function (response) {
                if (response.status === 401) {
                    $location.path('/login');
                }
                return response || $q.when(response);
            }
        })
    );


    angular.module('MyApp').config(function ($httpProvider) {
        $httpProvider.interceptors.push('authInterceptor');
    });

}