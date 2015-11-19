angular.module('cmselementBuilder.directive', ['cmsElementBuilder.controller','cmsElementBuilder.template'])
  .directive('cmselementbuilder', cmsElementBuilder)

function cmsElementBuilder($templateCache) {
  var directive = {
    restrict: 'E',
    scope:{
      elements: '=',
      viewextension: '='
    },
    controller:'cmsElementBuilderController',
    controllerAs:'cmsElementBuilder',
    bindToController: true,
    template: $templateCache.get('cms-element-builder.view.html')
  }
  
  return directive
}