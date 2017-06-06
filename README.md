This is a starter template for [Ionic](http://ionicframework.com/docs/) projects.

## How to use this template

*This template does not work on its own*. The shared files for each starter are found in the [ionic2-app-base repo](https://github.com/driftyco/ionic2-app-base).

To use this template, either create a new ionic project using the ionic node.js utility, or copy the files from this repository into the [Starter App Base](https://github.com/driftyco/ionic2-app-base).

### With the Ionic CLI:

Take the name after `ionic2-starter-`, and that is the name of the template to be used when using the `ionic start` command below:

```bash
$ sudo npm install -g ionic cordova
$ ionic start myBlank blank
```

Then, to run it, cd into `myBlank` and run:

```bash
$ ionic cordova platform add ios
$ ionic cordova run ios
```

Substitute ios for android if not on a Mac.

android
AIzaSyB-5mcxFf_haAZi0OoerBYJ3nVp5ZyNvDg
ios
AIzaSyDvl4CLj4FZRA0LJ32LayHm72t1brDzZFI

ionic cordova plugin add cordova-plugin-googlemaps --variable API_KEY_FOR_ANDROID="AIzaSyB-5mcxFf_haAZi0OoerBYJ3nVp5ZyNvDg" --variable API_KEY_FOR_IOS="AIzaSyDvl4CLj4FZRA0LJ32LayHm72t1brDzZFI"

ionic cordova plugin add phonegap-plugin-push --variable SENDER_ID=564553849534 --save