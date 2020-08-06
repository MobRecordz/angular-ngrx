import { Component } from '@angular/core';
import { select, Store } from '@ngrx/store'
import { Observable } from 'rxjs';

import { selectUsersList, selectUserById } from './store/users/users.selectors'
import { selectPostsList, selectPostsListWithUsers } from './store/posts/posts.selectors'
import { Post, PostsState } from './store/posts/posts.reducer'
import { User, UsersState } from './store/users/users.reducer'
import { CountIncreaseAction, CountDecreaseAction, CountClearAction } from './store/count/count.actions';

import { fetchPostsListAction } from './store/posts/posts.actions'
import { fetchUsersListAction } from './store/users/users.actions'
import { tap, delay, map, mergeMap } from 'rxjs/operators';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public usersList$: Observable<User[]> = this.storeUsers$.pipe(select(selectUsersList))
  public postsList$: Observable<any> = this.storePosts$.pipe(select(selectPostsList))

  public postsListWithUsers$: Observable<any> = this.storePosts$.pipe(
    select(selectPostsListWithUsers),
    tap(v => console.log(v))
  )


  
  constructor(
    private storePosts$: Store<PostsState>,
    private storeUsers$: Store<UsersState>
  ) {
    this.storePosts$.dispatch(new fetchPostsListAction())
    this.storeUsers$.dispatch(new fetchUsersListAction())
  }

  // increase() {
  //   this.store$.dispatch(new CountIncreaseAction())
  // }
}
