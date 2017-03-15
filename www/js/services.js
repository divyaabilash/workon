angular.module('starter.services', [])
    .factory('UserService', function($http) {
             function getByUserName(username, password) {
                console.log("hello from services");
                // user.name=username;
                // user.password=password;
                return {
                    username: username,
                    password: password
                };
            }


            // return {
            // 	getByUserName: getByUserName
            // };
    });
