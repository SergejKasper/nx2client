angular.module("activities/activities.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("activities/activities.tpl.html",
    "<div class=\"page bg-content\">" +
    "    <section ng-controller=\"ActivitiesCtrl\">" +
    "    <div class=\"container subnav-container-elem\">" +
    "    " +
    "    <div subnav menupoints='subnav.menupoints' isotope-item-filter='isotopeItemFilter'>" +
    "        <div class=\"subnav\" id=\"subnav\">" +
    "          <ul class=\"nav nav-pills\">" +
    "            <li class=\"subnav-search\">" +
    "                <!--<ul class=\"dropdown-menu\">" +
    "                  <li ng-repeat=\"menupoint in menupoints\"><a href=\"{{menupoint.url}}\">{{menupoint.name}}</a></li>" +
    "                </ul>-->" +
    "                <a href=\"#/newActivity\">Neue Activity erstellen!</a>" +
    "            </li>" +
    "            <li>" +
    "              <input type=\"text\" class=\"search-query input-medium\" placeholder=\"Suche im Partyprogramm!\" ng-model=\"isotopeItemFilter\">" +
    "            </li>" +
    "          </ul>" +
    "        </div>" +
    "      </div>" +
    "    </div>" +
    "    <div class=\"row-fuid\">" +
    "      <div class=\"span12\">" +
    "        <div class=\"main\">" +
    "        <ul id=\"og-grid\" class=\"og-grid\" items=\"activities\" isotope-Item-Filter=\"isotopeItemFilter\">" +
    "          <li ng-repeat=\"item in items\" class=\"grid-item\">" +
    "            <a href=\"#\" data-largesrc=\"assets/components/thumbnailgrid/images/{{item.path}}\" data-title=\"{{item.title}}\" data-description=\"{{item.description}}\">" +
    "              <img ng-src=\"assets/components/thumbnailgrid/images/thumbs/{{item.path}}\" alt=\"img01\"/>" +
    "            </a>" +
    "          </li>" +
    "        </ul>" +
    "        <p></p>" +
    "      </div>" +
    "      </div>" +
    "    </div>" +
    "  </section>" +
    "</div>");
}]);
