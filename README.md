AngularJS Portlet
=================

This portlet enables AngularJS in Liferay Portal.

Installation
-------------
Copy target/angularjs-portlet.war to your $LIFERAY\_HOME/deploy directory

What it does?
-------------
This portlet is a system portlet and you will not see it from the liferay's "Add" menu. 
It will be included on every page automatically, but you will not see any frame.

The only changes will appear on every page are:

1. The "html" tag will have an attribute ng-app="portal"
2. AngularJS libraries will be added in head section, like:

```html
<script type="text/javascript" src="/angularjs-portlet/js/angular/angular.min.js"></script>
<script type="text/javascript" src="/angularjs-portlet/js/angular/angular-resource.js"></script>
<script type="text/javascript" src="/angularjs-portlet/js/angular/ngupload-min.js"></script>
```

3. The application.js library will be added as well. It defines AngularJS namespaces for services and controllers:

```js
angular.module('portal.services', ['ngResource']);
angular.module('portal.controllers', []);
angular.module('portal', ['portal.services', 'portal.controllers']);
```

How to create AngularJS portlet
-------------------------------

see: https://github.com/dmitri-carpov/angularjs-sample-portlet
