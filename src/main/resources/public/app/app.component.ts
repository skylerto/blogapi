import { Component } from '@angular/core';
import {ROUTER_DIRECTIVES, Routes} from "@angular/router";

// Posts
import { PostsComponent } from './posts/posts.component';
import { PostService } from './posts/shared/post.service';

// Home
import { HomeComponent } from './home.component'


@Component({
  selector: 'blog-app',
  templateUrl: './app/app.component.html',
  directives: [ROUTER_DIRECTIVES, PostsComponent],
  providers: [PostService]
})
@Routes([
  { path: '/', component: HomeComponent},
  { path: '/posts', component: PostsComponent }
])
export class AppComponent {}

