var exec = require('cordova/exec');

exports.getAppSignature = function (success, error) {
    exec(success, error, 'ReadAppSignature', 'getSignature', []);
};
