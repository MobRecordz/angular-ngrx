import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Post } from '../store/posts/posts.reducer'
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root',
})
export class PostsService {
    private host: string = 'https://jsonplaceholder.typicode.com'

    constructor(private http: HttpClient) {}

    fetchPostsList(): Observable<any> {
        return this.http.get(`${this.host}/posts?_limit=10`)
    }

    fetchPostsListByUserId(id): Observable<any> {
      return this.http.get(`${this.host}/posts?userId=${id}&_limit=10`)
    }

    fetchPostComments(postId): Observable<any> {
      return this.http.get(`${this.host}/posts/${postId}/comments`)
    }
}