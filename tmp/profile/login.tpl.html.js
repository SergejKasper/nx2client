angular.module("profile/login.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("profile/login.tpl.html",
    "<div class=\"page bg-content\">" +
    "	<section ng-controller=\"LoginCtrl\">" +
    "    <div class=\"bg-content-auth\">" +
    "		<accordion>" +
    "			<accordion-group heading=\"Login\" is-open=\"true\">" +
    "			<!--form ng-submit=\"login()\"-->" +
    "			<form action=\"/login\" method=\"POST\" class=\"ng-pristine ng-valid\">" +
    "	    	<div>" +
    "				<div>" +
    "					<div ng-show=\"formValidationError\"> " +
    "						<p class=\"error\">" +
    "							<span class=\"label label-important\">{{formVaildationError}}</span>" +
    "						</p>" +
    "					</div>" +
    "					<div class=\"clearfix\" id=\"email_field\">" +
    "						<div class=\"input\">" +
    "							<label for=\"email\" class=\"youmail\" data-icon=\"e\" > Deine E-Mail Adresse</label>" +
    "							<input type=\"text\" id=\"email\" name=\"email\" ng-model=\"email\" value=\"\">" +
    "							<span class=\"help-inline danger\" ng-show=\"!!form.email.$error.validator\">{{email}} ist ungültig</span>" +
    "							<span class=\"help-inline success\" ng-show=\"form.email.$error.validator\">{{email}} ist ok</span>" +
    "						</div>" +
    "					</div>" +
    "					<div class=\"clearfix  \" id=\"password_field\">" +
    "						<div class=\"input\">" +
    "							<label for=\"password\" class=\"youpasswd\" data-icon=\"p\">Dein Passwort </label>" +
    "							<input type=\"password\" id=\"password\" name=\"password\" required ng-model=\"password\">" +
    "							<span class=\"help-inline\"></span>" +
    "							<span class=\"help-block\"></span> " +
    "						</div>" +
    "					</div>" +
    "					<input class=\"btn btn-primary\" type=\"submit\" id=\"submit\" value=\"Submit\" />" +
    "					<br/>" +
    "					<br/>" +
    "					<a href=\"javascript:void(0);\" onclick=\"\">Passwort vergessen</a>" +
    "				</div>" +
    "	    	</div>" +
    "	    	</form>" +
    "	    	</accordion-group>" +
    "			<accordion-group heading=\"Register\">" +
    "				<form ng-submit=\"register()\">" +
    "				<div>" +
    "					<div class=\"clearfix  \" id=\"reg_name_field\">" +
    "					<div class=\"input\">				" +
    "						<label for=\"reg_name\" class=\"youuser\" data-icon=\"u\" > Dein Username</label>" +
    "						<input type=\"text\" ng-model=\"reg_name\" id=\"reg_name\" name=\"name\" value=\"\">		" +
    "						<span class=\"help-inline\"></span>" +
    "						<span class=\"help-block\"></span> " +
    "					</div>" +
    "					</div>" +
    "				<div class=\"clearfix  \" id=\"reg_email_field\">" +
    "				<div class=\"input\">" +
    "					<label for=\"reg_email\" class=\"youmail\" data-icon=\"e\" > Deine E-Mail Adresse</label>" +
    "					<input type=\"text\" ng-model=\"reg_email\" id=\"reg_email\" name=\"email\" value=\"\">" +
    "					<span class=\"help-inline\"></span>" +
    "					<span class=\"help-block\"></span> " +
    "				</div>" +
    "				</div>" +
    "				<div class=\"clearfix\" id=\"reg_password_field\">" +
    "					<label for=\"reg_password\" class=\"youmail\" data-icon=\"p\" > Dein Passwort</label>" +
    "					<div class=\"input\">	" +
    "						<input type=\"password\" id=\"reg_password\" ng-model=\"reg_password\" name=\"password\">" +
    "						<span class=\"help-inline\"></span>" +
    "						<span class=\"help-block\"></span>" +
    "					</div>" +
    "				</div>" +
    "				<div class=\"clearfix  \" id=\"reg_repeatPassword_field\">" +
    "					<label for=\"reg_repeatPassword\" class=\"youmail\" data-icon=\"e\" > Wiederhole das gewählte Passwort</label>" +
    "					<div class=\"input\">				" +
    "						<input type=\"password\" id=\"reg_repeatPassword\" ng-model=\"reg_repeatPassword\" name=\"repeatPassword\">" +
    "						" +
    "						<span class=\"help-inline\"></span>" +
    "						<span class=\"help-block\"></span> " +
    "					</div>" +
    "				</div>" +
    "			<input type=\"submit\" value=\"Jetzt registrieren\" class=\"btn btn-primary\">" +
    "		</form>" +
    "	</accordion-group>" +
    "	</accordion>" +
    "	</div>" +
    "</section>" +
    "</div>");
}]);
