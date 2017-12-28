var MyApp;
(function (MyApp) {
    var Services;
    (function (Services) {
        var YelpService = (function () {
            function YelpService() {
            }
            YelpService.prototype.seach = function () {
                "retrieveYelp";
                function (name, callback) {
                    var method = 'GET';
                    var url = 'http://api.yelp.com/v2/search';
                    var params = {
                        callback: 'angular.callbacks._0',
                        location: 'San+Francisc',
                        oauth_consumer_key: '',
                        oauth_token: '',
                        oauth_signature_method: "HMAC-SHA1",
                        oauth_timestamp: new Date().getTime(),
                        oauth_nonce: randomString(32, '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'),
                        term: 'food'
                    };
                    var consumerSecret = ''; //Consumer Secret
                    var tokenSecret = ''; //Token Secret
                    var signature = oauthSignature.generate(method, url, params, consumerSecret, tokenSecret, { encodeSignature: false });
                    params['oauth_signature'] = signature;
                    $http.jsonp(url, { params: params }).success(callback);
                }
            };
            return YelpService;
        })();
        Services.YelpService = YelpService;
    })(Services = MyApp.Services || (MyApp.Services = {}));
})(MyApp || (MyApp = {}));
//API v2.0
//Consumer Key	6vuE8TDTnOcXaVh0iqo0fw
//Consumer Secret	8Ck1_TrzjN5girtTQ8- UqnfyEzY
//Token	vrQ8- g4rrumZZQKXLwQLAp60NusBlhoo
//Token Secret	CKOKhsm_gdL14HGmrc7RLglujqg  
