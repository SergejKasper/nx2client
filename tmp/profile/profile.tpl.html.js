angular.module("profile/profile.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("profile/profile.tpl.html",
    "<div class=\"page bg-content\">" +
    "	<section ng-controller=\"ProfileCtrl\">" +
    "    <b>Profile</b><br><br>" +
    "    <button style=\"float: left;\" ng-Disabled='!Navigation.backPage', ng-click='Navigation.back()'>Back</button> " +
    "    <button style=\"float: right;\" ng-Disabled='!Navigation.nextPage', ng-click='Navigation.next()'>Next</button>" +
    "	</section>" +
    "</div>");
}]);
