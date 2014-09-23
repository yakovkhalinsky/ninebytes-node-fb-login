// This is an example of how to validate a user and their auth token once they are connected to their account

var fb = require('../index');

var fbAppToken = 'facebook-app-token';
var userAccessToken = 'users-auth-token';
var userId = 'users-id';

fb.validateUserAccessTokenAndId(fbAppToken, userAccessToken, userId, function(error, isValid) {
    console.log('callback: ', error, isValid);
});
