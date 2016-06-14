import { Component } from '@angular/core';
import { HTTP_PROVIDERS } from '@angular/http';
import { Http } from '@angular/http';
import { RouteConfig, ROUTER_DIRECTIVES, RouterLink } from '@angular/router-deprecated';
import { Posts } from './posts.component';


@Component({
    // selector: 'my-app',
    providers: [HTTP_PROVIDERS],
    directives: [RouterLink],
    template: '<h1>Hello, {{ firstName + lastName }}</h1>'
})

@RouteConfig([
  {path: '/', name: 'Home', component: AppComponent},
  {path: '/posts', name: 'Posts', component: Posts},
  {path: '/posts/:id', name: 'PostsDetail', component: Posts}
])
export class AppComponent { 

  public firstName : string
  public lastName : string

  constructor(private http:Http) {
    this.firstName = 'Skyler'
    this.lastName = 'Layne'
  }
}
