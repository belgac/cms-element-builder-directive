angular.module('cmsElementBuilder.controller', [])
  .controller('cmsElementBuilderController', cmsElementBuilderController);
function cmsElementBuilderController () {
  var vm = this;
  vm.getViewUrl = function(viewName){
    return viewName + (vm.viewextension || '.html');
  }
}