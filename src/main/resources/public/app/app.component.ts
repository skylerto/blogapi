import { Component } from '@angular/core';
import {ROUTER_DIRECTIVES, Routes} from "@angular/router";

// Posts
import { PostsComponent } from './posts/posts.component';
import { PostService } from './posts/shared/post.service';

// Home
import { HomeComponent } from './home.component'


@Component({
  selector: 'blog-app',
  template: `
    <a [routerLink]="['/']">Home</a>
    <a [routerLink]="['/posts']">Blog</a>
    <div class="outer-outlet">
      <router-outlet></router-outlet>
    </div>
  `,
  directives: [ROUTER_DIRECTIVES, PostsComponent],
  providers: [PostService]
})
@Routes([
  { path: '/', component: HomeComponent},
  { path: '/posts', component: PostsComponent }
])
export class AppComponent {}

