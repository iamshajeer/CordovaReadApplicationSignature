var exec = require('cordova/exec');

exports.getAppSignature = function (arg0, success, error) {
    exec(success, error, 'ReadAppSignature', 'getAppSignature', [arg0]);
};
