AngularJS Portlet
=================

This portlet enables AngularJS in Liferay Portal.

Installation
-------------
Download war file from target/angularjs-portlet.war and copy it to $LIFERAY\_HOME/deploy directory

What it does?
-------------
This portlet is a system portlet you will not see it from liferay's "Add" menu. 
It will be included on every page of the portal automatically, but do not worry user will notice nothing.

The only changes will appear on the pages are:

1. The "html" tag will have an attribute ng-app="portal"
2. It includes angularjs libraries in head section, like:
```html
<script type="text/javascript" src="/angularjs-portlet/js/angular/angular.min.js"></script>
<script type="text/javascript" src="/angularjs-portlet/js/angular/angular-resource.js"></script>
<script type="text/javascript" src="/angularjs-portlet/js/angular/ngupload-min.js"></script>
```html
3. It includes application.js which already defines AngularJS namespaces for services and controllers
```js
angular.module('portal.services', ['ngResource']);
angular.module('portal.controllers', []);
angular.module('portal', ['portal.services', 'portal.controllers']);
```

How to create AngularJS portlet
-------------------------------

see: https://github.com/dmitri-carpov/angularjs-sample-portlet
