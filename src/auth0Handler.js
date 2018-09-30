var express = require('express');
var auth0Router = express.Router();
var requestClient = require('request');
var auth0Domain = "hasuratodo.auth0.com";

auth0Router.route('/webhook').get((request, response) => {
  // Throw 500 if auth0 domain is not configured
  if (!auth0Domain) {
    response.status(500).send('Auth0 domain not configured');
    return;
  }

  var token = request.get('Authorization');

  if (!token) {
    response.json({'x-hasura-role': 'anonymous'});
    return;
  } else {
    // Fetch information about this user from
    // auth0 to validate this token
    // NOTE: Replace the URL with your own auth0 app url
    var options = {
      url: `https://${auth0Domain}/userinfo`,
      headers: {
        Authorization: token,
        'Content-Type': 'application/json'
      }
    };

    requestClient(options, (err, res, body) => {
      if (!err && res.statusCode == 200) {
        var userInfo = JSON.parse(body);
        console.log(userInfo); //debug
        var hasuraVariables = {
          'X-Hasura-User-Id': userInfo.sub,
          'X-Hasura-Role': 'user'
        };
        console.log(hasuraVariables); // For debug
        response.json(hasuraVariables);
      } else {
        // Error response from auth0
        console.log(err, res, body);
        response.json({'x-hasura-role': 'anonymous'});
        return;
      }
    });
  }
});

module.exports = auth0Router;
