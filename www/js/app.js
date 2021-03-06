// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic'])

.run(function($ionicPlatform) {
    $ionicPlatform.ready(function() {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)
        if (window.cordova && window.cordova.plugins.Keyboard) {
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
            cordova.plugins.Keyboard.disableScroll(true);

        }
        if (window.StatusBar) {
            // org.apache.cordova.statusbar required
            StatusBar.styleDefault();
        }
    });
})

.config(function($stateProvider, $urlRouterProvider) {
        $stateProvider

            .state('app', {
            url: '/app',
            abstract: true,
            templateUrl: 'templates/menu.html',
            controller: 'AppCtrl'
        })

        .state('app.founderStory', {
            url: '/founderStory',
            views: {
                'menuContent': {
                    templateUrl: 'templates/FoundersStory.html'
                }
            }
        })

        .state('app.tour', {
                url: '/tour',
                views: {
                    'menuContent': {
                        templateUrl: 'templates/sumbon_toure.html'
                    }
                }
            })
            .state('app.home', {
                url: '/home',
                views: {
                    'menuContent': {
                        templateUrl: 'templates/home.html',
                        controller: 'PlaylistsCtrl'
                    }
                }
            });

        // .state('app.single', {
        //     url: '/playlists/:playlistId',
        //     views: {
        //         'menuContent': {
        //             templateUrl: 'templates/playlist.html',
        //             controller: 'PlaylistCtrl'
        //         }
        //     }
        // });
        // if none of the above states are matched, use this as the fallback
        $urlRouterProvider.otherwise('/app/home');
    })
    .factory('UserService', ['$q', '$http', function($q, $http) {
        function getByUserName(username, password) {
            console.log("hello from services");
            return $http.post('http://localhost:5000/user', {
                username: username,
                password: password
            });
        }

        var services = {};
        services.getByUserName = getByUserName;
        return services;
        // return {
        //     getByUserName: getByUserName
        // }
    }])
    .controller('AppCtrl', ['$scope', '$ionicModal', '$timeout', '$state', 'UserService', function($scope, $ionicModal, $timeout, $state, UserService) {

        // With the new view caching in Ionic, Controllers are only called
        // when they are recreated or on app start, instead of every page change.
        // To listen for when this page is active (for example, to refresh data),
        // listen for the $ionicView.enter event:
        //$scope.$on('$ionicView.enter', function(e) {
        //});

        // Form data for the login modal
        $scope.loginData = {

        };

        // Create the login modal that we will use later
        $ionicModal.fromTemplateUrl('templates/login.html', {
            scope: $scope
        }).then(function(modal) {
            $scope.modal = modal;
        });

        // Triggered in the login modal to close it
        $scope.closeLogin = function() {
            $scope.modal.hide();
        };

        // Open the login modal
        $scope.login = function() {
            $scope.modal.show();
        };

        // Perform the login action when the user submits the login form
        $scope.doLogin = function() {
            console.log('Doing login', $scope.loginData);
            var username = $scope.loginData.username;
            console.log("username " + username);
            debugger;
            var psd = $scope.loginData.password;
            if (username !== '' && psd !== '' && username && psd && username !== 'undefined' && psd !== 'undefined') {
                UserService.getByUserName(username, psd).then(function(result) {
                    console.log(result);
                });
                // Simulate a login delay. Remove this and replace with your login
                // code if using a login system
                $timeout(function() {
                    $scope.closeLogin();
                    $state.go("app.home");
                }, 1000);
            };
        };
    }])

.controller('PlaylistsCtrl', function($scope) {
    $scope.playlists = [
        { title: 'Reggae', id: 1 },
        { title: 'Chill', id: 2 },
        { title: 'Dubstep', id: 3 },
        { title: 'Indie', id: 4 },
        { title: 'Rap', id: 5 },
        { title: 'Cowbell', id: 6 }
    ];
})

.controller('PlaylistCtrl', function($scope, $stateParams) {})

.controller('loginCtrl', function($scope, $stateParams) {});
