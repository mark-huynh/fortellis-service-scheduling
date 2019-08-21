var request = require('request');
 
export default {
    getAccessToken: () => {
        var json;
        request({
            url: 'https://identity.fortellis.io/oauth2/aus1p1ixy7YL8cMq02p7/v1/token',
            method: 'POST',
            auth: {
              user: 'FAA72ZKQCvDHpWudwxeOlLUvf2PbAJv3',
              pass: '5lVNtg1Lj3NiF5um'
            },
            form: {
              'grant_type': 'client_credentials',
              'scope': 'anonymous'
            }
          }, function(err, res) {
            json = JSON.parse(res.body);
    })
    return json.access_token;
}
}
