import { Component } from '@angular/core';
import { HTTP_PROVIDERS } from '@angular/http';
import { Http } from '@angular/http';
import {ROUTER_DIRECTIVES, Router, Routes} from "@angular/router";
import { Posts } from './posts.component';


@Component({
    selector: 'my-app',
    providers: [HTTP_PROVIDERS],
    directives: [ROUTER_DIRECTIVES],
   template:`
    <nav class="navbar navbar-default">
      <div class="container-fluid">
        <!-- Brand and toggle get grouped for better mobile display -->
        <div class="navbar-header">
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a class="navbar-brand" href="#">Blog API</a>
        </div>

        <!-- Collect the nav links, forms, and other content for toggling -->
        <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <ul class="nav navbar-nav navbar-right">
            <li><a [routerLink]="['/']">Home</a></li>
            <li><a [routerLink]="['/posts']">Blog</a></li>
            <li><a [routerLink]="['/posts']">Login</a></li>
          </ul>
        </div><!-- /.navbar-collapse -->
      </div><!-- /.container-fluid -->
    </nav>
  `
})
@Routes([
  {path: '/', component: AppComponent},
  {path: '/posts', component: Posts},
  {path: '/posts/:id', component: Posts}
])
export class AppComponent { 

  public firstName : string
  public lastName : string

  constructor() {
    this.firstName = 'Skyler'
    this.lastName = 'Layne'
  }
}
