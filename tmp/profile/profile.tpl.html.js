angular.module("profile/profile.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("profile/profile.tpl.html",
    "<div class=\"page bg-content\">" +
    "	<section ng-controller=\"ProfileCtrl\">" +
    "    <p>Welcome, {{User.getName()}}!</p>" +
    "	<button ng-click=\"User.logout()\">Logout</button>" +
    "	</section>" +
    "</div>");
}]);
