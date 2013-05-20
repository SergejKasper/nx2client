angular.module("profile/profile.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("profile/profile.tpl.html",
    "<div class=\"page page1\">" +
    "    <b>Profile</b><br><br>" +
    "    <button  ng-click=\"direction('front');go('/home')\">go to home</button>" +
    "</div>");
}]);
