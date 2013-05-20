angular.module("home/home.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("home/home.tpl.html",
    "<div class=\"page page3\">" +
    "    <b>Home</b><br><br>" +
    "    <button  ng-click=\"direction('back');go('/activities')\"  >go to Activities</button>" +
    "    <button  ng-click=\"direction('front');go('/profile')\"  >go to Profile</button>" +
    "</div>");
}]);
