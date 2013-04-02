/*
 (c) 2013 Savoir-faire Linux. http://savoirfairelinux.com
 License: MIT
*/
document.getElementsByTagName('html')[0].setAttribute('ng-app', 'portal');
angular.module('portal.services', ['ngResource']);
angular.module('portal.controllers', []);
angular.module('portal', ['portal.services', 'portal.controllers']);