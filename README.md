## Server side user verification of Facebook users for your Facebook Apps

## How to get it?

`npm install ninebytes-node-fb-login`


### Example implementation.

``` 
var fb = require('ninebytes-fb-login');

fb.validateUserAccessTokenAndId(fbAppToken, userAccessToken, userId, function(error, isValid) {
    console.log('callback: ', error, isValid);
});
```


### Where do I get my App Token From?

https://developers.facebook.com/tools/accesstoken/