import { Component } from '@angular/core';
import { RouteConfig, ROUTER_DIRECTIVES, RouterLink } from '@angular/router-deprecated';

@Component({
  selector: 'navbar',
  directives: [RouterLink],
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
          <a class="navbar-brand" href="#">{{ title }}</a>
        </div>

        <!-- Collect the nav links, forms, and other content for toggling -->
        <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <ul class="nav navbar-nav navbar-right">
            <li><a [routerLink]="['Home']">Home</a></li>
            <li><a [routerLink]="['Posts']">Blog</a></li>
            <li><a [routerLink]="['Login']">Login</a></li>
          </ul>
        </div><!-- /.navbar-collapse -->
      </div><!-- /.container-fluid -->
    </nav>
  `

})

export class Navbar {
  private title: string;

  constructor() {
    this.title = 'Blog API';
  }

}
