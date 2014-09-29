'use strict';

var request = require('request');
var sanitize = require('validator');

// Your apps token, can be obtained from: https://developers.facebook.com/tools/accesstoken/
// (After you have setup your app in your Facebook developer account)

var FB_URL = 'https://graph.facebook.com/debug_token';

exports.validateUserAccessTokenAndId = function(fbAppToken, userAccessToken, userId, cb) {
    var url = FB_URL + '?input_token=' + sanitize.escape(userAccessToken) + '&access_token=' + fbAppToken;
    request({url: url, json: true}, function (error, response, body) {
        if (error) {
            return cb(error);
        }

        if (!body) {
            return cb(null, false);
        }

        if (!error && response.statusCode === 200) {
            return cb(null, body.data['is_valid'] && body.data['user_id'] === sanitize.escape(userId));
        }
    });
};
