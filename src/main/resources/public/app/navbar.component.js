"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var router_deprecated_1 = require('@angular/router-deprecated');
var Navbar = (function () {
    function Navbar() {
        this.title = 'Blog API';
    }
    Navbar = __decorate([
        core_1.Component({
            selector: 'navbar',
            directives: [router_deprecated_1.RouterLink],
            template: "\n    <nav class=\"navbar navbar-default\">\n      <div class=\"container-fluid\">\n        <!-- Brand and toggle get grouped for better mobile display -->\n        <div class=\"navbar-header\">\n          <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\" aria-expanded=\"false\">\n            <span class=\"sr-only\">Toggle navigation</span>\n            <span class=\"icon-bar\"></span>\n            <span class=\"icon-bar\"></span>\n            <span class=\"icon-bar\"></span>\n          </button>\n          <a class=\"navbar-brand\" href=\"#\">{{ title }}</a>\n        </div>\n\n        <!-- Collect the nav links, forms, and other content for toggling -->\n        <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\n          <ul class=\"nav navbar-nav navbar-right\">\n            <li><a [routerLink]=\"['Home']\">Home</a></li>\n            <li><a [routerLink]=\"['Posts']\">Blog</a></li>\n            <li><a [routerLink]=\"['Login']\">Login</a></li>\n          </ul>\n        </div><!-- /.navbar-collapse -->\n      </div><!-- /.container-fluid -->\n    </nav>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], Navbar);
    return Navbar;
}());
exports.Navbar = Navbar;
//# sourceMappingURL=navbar.component.js.map