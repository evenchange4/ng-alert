# ng-alert

AngularJS component for easily creating Alert. 

## Install

Install with `bower`:

```shell
$ bower install ng-alert
```

Add a `<script>` to your `index.html`:

```html
<script src="/bower_components/ng-alert/ng-alert.js"></script>
```

## Documentation

```
angular.module('main', ['ngAlert']);
```

## alert-container Directive

```
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

```
$scope.alertClose = function(){
  $scope.isAlert = false;
};
```