"use strict";
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var app_component_1 = require('./app.component');
var http_1 = require('@angular/http');
var posts_component_1 = require('./posts.component');
var navbar_component_1 = require('./navbar.component');
var router_deprecated_1 = require('@angular/router-deprecated');
platform_browser_dynamic_1.bootstrap(navbar_component_1.Navbar);
platform_browser_dynamic_1.bootstrap(app_component_1.AppComponent, [router_deprecated_1.ROUTER_DIRECTIVES]);
platform_browser_dynamic_1.bootstrap(posts_component_1.Posts, [http_1.HTTP_PROVIDERS, router_deprecated_1.ROUTER_DIRECTIVES]);
//# sourceMappingURL=main.js.map