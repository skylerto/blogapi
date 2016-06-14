"use strict";
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var app_component_1 = require('./app.component');
var http_1 = require('@angular/http');
var posts_component_1 = require('./posts.component');
platform_browser_dynamic_1.bootstrap(app_component_1.AppComponent);
platform_browser_dynamic_1.bootstrap(posts_component_1.Posts, [http_1.HTTP_PROVIDERS]);
//# sourceMappingURL=main.js.map