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
var Posts = (function () {
    function Posts(http) {
        this.http = http;
        this.title = 'Posts';
        this.posts = new Array();
    }
    Posts.prototype.ngOnInit = function () {
        this.getPosts();
    };
    Posts.prototype.getPosts = function () {
        var _this = this;
        this.http.get('/blog/posts').subscribe(function (res) {
            res = res.json();
            console.log(res);
            _this.posts = res;
        }, function (err) { return console.error(err); }, function () { return console.log('done'); });
    };
    Posts = __decorate([
        core_1.Component({
            selector: 'posts',
            providers: [http_1.HTTP_PROVIDERS],
            template: "\n      <h1>{{ title }}</h1>\n      <div class=\"posts\">\n        <div *ngFor=\"let post of posts\">\n          <h2>{{ post.title }}</h2>\n          <div [innerHtml]=\"post.content\"></div>\n        </div>\n      </div>\n    "
        }), 
        __metadata('design:paramtypes', [http_2.Http])
    ], Posts);
    return Posts;
}());
exports.Posts = Posts;
//# sourceMappingURL=posts.component.js.map