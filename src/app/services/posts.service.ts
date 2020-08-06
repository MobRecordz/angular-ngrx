import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Post } from '../store/posts/posts.reducer'
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root',
})
export class PostsService {
    constructor(private http: HttpClient) {}

    fetchPostsList(): Observable<any> {
        return this.http.get('https://jsonplaceholder.typicode.com/posts?_limit=10')
    }
}