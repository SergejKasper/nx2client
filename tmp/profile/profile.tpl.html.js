angular.module("profile/profile.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("profile/profile.tpl.html",
    "<div class=\"page bg-content\">" +
    "	<section ng-controller=\"ProfileCtrl\">" +
    "    <b>Profile</b><br><br>" +
    "	</section>" +
    "</div>");
}]);
