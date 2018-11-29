# cordova-plugin-get-app-signature

#### Version 0.1.0 (12/07/2018)

## What is Application Signing ?

> Application signing allows developers to identify the author of the application and to update their application without creating complicated interfaces and permissions. Every application that is run on the Android platform must be signed by the developer. Applications that attempt to install without being signed will be rejected by either Google Play or the package installer on the Android device.

You can read more about it on [Android official website](https://source.android.com/security/apksigning/)

## What is the main purpose of this plugin

- By using this plugin you can get the application signature key, you can verify this signature with the original signature to amake sure that application is not tampered. [Read more about application tampering here](https://www.owasp.org/index.php/Mobile_Top_10_2016-M8-Code_Tampering) also [Refer this link as well](https://www.airpair.com/android/posts/adding-tampering-detection-to-your-android-app)


- ```cordova plugin add cordova-plugin-get-app-signature``` - this command will install plugin to your project

## Tampering Prevention Techniques
	
> Signature verification is one of the method to prevent apk tampering, you need to find the signature key and that key you need to validate from server when the application opens, get the key for the first time and pass it to your server guy, let him store it in his server and each time when the app opens he will have to validate the key, if the key is not matching the app has been tampered, in that case you can block the user from accessing the application,

## Usage

```javascript
 
  cordova.plugins.ReadAppSignature.getAppSignature(function(signature){
		console.debug("signature: %s", signature);
	}, function(error){
		console.debug("signature error: %s", JSON.stringify(error));
	});

```

## License
```
The MIT License

Copyright (c) 2017 Shajeer Ahamed (info4shajeer@gmail.com)

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
```
