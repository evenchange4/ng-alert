var alertContainer;
alertContainer = function(){
  return {
    restrict: 'EA',
    scope: {
      title: '@',
      desc: '@',
      btn: '@',
      type: '@',
      closefn: '&'
    },
    template: '<div class="ngAlert-overlay"></div>\n{{alert}}\n<div class="ngAlert ngAlert-alert ngAlert-{{type}}" style="display: block;">\n  <h1> {{title}} </h1>\n  <p> {{desc}} </p>\n  <div class="ngAlert-confirmBtn-wrapper"><a class="ngAlert-confirmBtn" href="#" ng-click="closefn()">{{btn}}</a></div>\n</div>'
  };
};
angular.module('ngAlert', ['ngAnimate']).directive('alertContainer', alertContainer);