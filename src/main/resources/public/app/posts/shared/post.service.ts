import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http'
import { Observable } from 'rxjs/Observable';
import { Post } from './post.model';

@Injectable()
export class PostService {

  constructor (private http: Http) {}

  private postsURL = '/blog/posts';

  getPosts(): Observable<Response> {
    return this.http.get(this.postsURL);
  }

}
