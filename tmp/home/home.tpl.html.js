angular.module("home/home.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("home/home.tpl.html",
    "<div class=\"page bg-content\">" +
    "  <div ng-controller=\"HomeCtrl\">" +
    "  <button style=\"float: left;\" ng-Disabled='!Navigation.backPage', ng-click='Navigation.back()'>Back</button> " +
    "  <button style=\"float: right;\" ng-Disabled='!Navigation.nextPage', ng-click='Navigation.next()'>Next</button>" +
    "  <div>" +
    "    <div slider slides=\"slides\" id=\"ei-slider\" class=\"ei-slider\"></div>" +
    "  </div>" +
    "</div>");
}]);
