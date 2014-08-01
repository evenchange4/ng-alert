# ng-alert

AngularJS component for easily creating Alert. 

## Install

Install with `bower`:

```shell
$ bower install ng-alert --save
```

Add a `<script>` to your `index.html`:

```html
<script src="/bower_components/angular/angular.min.js"></script>
<script src="/bower_components/angular-animate/angular-animate.min.js"></script>
<script src="/bower_components/ng-alert/ng-alert.js"></script>
<link rel="stylesheet" href="/bower_components/ng-alert/ng-alert.css">
```

# Documentation

```js
angular.module('main', ['ngAlert']);
```

## alert-container Directive

```html
<alert-container 
  ng-init="isAlert=false"
  ng-show="isAlert" 
  closefn="alertClose()" 
  type="error" 
  title="Alert!!" 
  desc="You are not allow to do this."
  btn="Close"
  >
</alert-container>
```

## controller

```js
$scope.alertClose = function(){
  $scope.isAlert = false;
};
```

# Dependencies

```js
"dependencies": {
  "angular": ">1.2.6",
  "angular-animate": "~1.2.8"
}
```

# Credits
Inspired by https://github.com/LarsVonQualen/AlertJS.