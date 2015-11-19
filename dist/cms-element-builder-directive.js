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
cmsElementBuilder.$inject = ["$templateCache"];;
angular.module('cmsElementBuilder.controller', [])
  .controller('cmsElementBuilderController', cmsElementBuilderController);
function cmsElementBuilderController () {
  var vm = this;
  vm.getViewUrl = function(viewName){
    return viewName + (vm.viewextension || '.html');
  }
};
angular.module("cmsElementBuilder.template", []).run(["$templateCache", function($templateCache) {$templateCache.put("cms-element-builder.view.html","<div ng-repeat=\"element in cmsElementBuilder.elements  | orderBy : \'order\'\" ng-class=\"element.parentClass\" ng-include=\"cmsElementBuilder.getViewUrl(element.type)\"></div>");
$templateCache.put("cms-subelement-builder.view.html","<cmselementbuilder elements=\"element.subElements\" viewextension=\"element.viewExtension\"></cmselementbuilder>");}]);
//# sourceMappingURL=cms-element-builder-directive.js.map
