import { Component } from '@angular/core';
import { HTTP_PROVIDERS } from '@angular/http';
import { Http } from '@angular/http';
import {ROUTER_DIRECTIVES, Router, Routes} from "@angular/router";


@Component({
  selector: 'my-app',
  providers: [HTTP_PROVIDERS],
  directives: [ROUTER_DIRECTIVES],
  template: 'app.component.html'
})
export class NavbarComponent { 

  public firstName : string
  public lastName : string

  constructor() {
    this.firstName = 'Skyler'
    this.lastName = 'Layne'
  }
}
