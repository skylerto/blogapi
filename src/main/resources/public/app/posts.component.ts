import { Component } from '@angular/core';
import { HTTP_PROVIDERS } from '@angular/http'
import { Http, Response } from '@angular/http'
import {Observable} from 'rxjs/Rx';


@Component({
    selector: 'posts',
    providers: [HTTP_PROVIDERS],
    template: `
      <h1>{{ title }}</h1>
      <div class="posts">
        <div *ngFor="let post of posts">
          <h2>{{ post.title }}</h2>
          <div [innerHtml]="post.content"></div>
        </div>
      </div>
    `
})
export class Posts { 

  private title: string;
  public posts;

  constructor(private http:Http) {
    this.title = 'Posts';
    this.posts = new Array();
  }

  ngOnInit() {
    this.getPosts();
  }

  getPosts() {
    this.http.get('/blog/posts').subscribe(res => {
      res = res.json()
      console.log(res);
      this.posts = res;
    },
      err => console.error(err),
      () => console.log('done'))
  }
}
