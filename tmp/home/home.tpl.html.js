angular.module("home/home.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("home/home.tpl.html",
    "<div class=\"page bg-content\">" +
    "  <div ng-controller=\"HomeCtrl\">" +
    "  <div>" +
    "    <div slider slides=\"slides\" id=\"ei-slider\" class=\"ei-slider\"></div>" +
    "  </div>" +
    "</div>");
}]);
