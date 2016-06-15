import { Component } from '@angular/core';
import { HTTP_PROVIDERS } from '@angular/http'
import { Http, Response } from '@angular/http'
import { PostService } from './shared/post.service'
import { Post } from './shared/post.model'


@Component({
    selector: 'posts-component',
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
export class PostsComponent {

  private title: string;
  private posts: Post[];
  errorMessage: string;

  constructor(private postService:PostService) {
    this.title = 'Posts';
    this.posts = [];
  }

  ngOnInit() {
    this.getPosts();
  }

  getPosts() {
    this.postService.getPosts()
                    .subscribe(
                      res => {
                        this.posts = res.json()
                      },
                      error => {
                        this.errorMessage = <any>error
                      });
  }


}
