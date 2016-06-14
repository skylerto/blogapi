import { Component } from '@angular/core';
import { HTTP_PROVIDERS } from '@angular/http'
import { Http } from '@angular/http'


@Component({
    selector: 'my-app',
    providers: [HTTP_PROVIDERS],
    template: '<h1>Hello, {{ firstName + lastName }}</h1>'
})
export class AppComponent { 

  public firstName : string
  public lastName : string

  constructor(private http:Http) {
    this.firstName = 'Skyler'
    this.lastName = 'Layne'
  }
}
