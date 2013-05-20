angular.module("activities/activities.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("activities/activities.tpl.html",
    "<div class=\"page page1\">" +
    "    <b>Activities Page</b><br><br>" +
    "    <button  ng-click=\"direction('front');go('/home')\"  >Home</button>" +
    "</div>");
}]);
