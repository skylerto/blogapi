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
var http_1 = require('@angular/http');
var http_2 = require('@angular/http');
var router_deprecated_1 = require('@angular/router-deprecated');
var posts_component_1 = require('./posts.component');
var AppComponent = (function () {
    function AppComponent(http) {
        this.http = http;
        this.firstName = 'Skyler';
        this.lastName = 'Layne';
    }
    AppComponent = __decorate([
        core_1.Component({
            // selector: 'my-app',
            providers: [http_1.HTTP_PROVIDERS],
            directives: [router_deprecated_1.RouterLink],
            template: '<h1>Hello, {{ firstName + lastName }}</h1>'
        }),
        router_deprecated_1.RouteConfig([
            { path: '/', name: 'Home', component: AppComponent },
            { path: '/posts', name: 'Posts', component: posts_component_1.Posts },
            { path: '/posts/:id', name: 'PostsDetail', component: posts_component_1.Posts }
        ]), 
        __metadata('design:paramtypes', [http_2.Http])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map