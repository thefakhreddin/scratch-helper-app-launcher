# scratch-helper-app-launcher
Launches the Mulberry Tart helper app for scratch .exe file with a push of a button

This adaptor launches the same old node js server and scrach application conviniently.
To create setup files to deploy, twik **electron forge** settings through its .json file.

This is THE **WORKING PRODUCT**!


To make installation files:
use a mac computer and:
run `npm install electron-packager -g` and `npm install electron`

for mac run:
`electron-packager . <appName> --platform=darwin --arch=x64 --icon=<icon.icns>`

for windows run:
`electron-packager . <appName> --platform=win32 --arch=x64 --icon=<icon.ico>`
