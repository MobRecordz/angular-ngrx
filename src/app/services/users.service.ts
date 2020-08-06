import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { User } from '../store/users/users.reducer'
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root',
})
export class UsersService {
    constructor(private http: HttpClient) {}

    fetchUsersList(): Observable<any> {
        return this.http.get('https://jsonplaceholder.typicode.com/users?_limit=10')
    }
}