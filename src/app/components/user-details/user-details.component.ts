import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { Observable } from 'rxjs';
import { User } from 'src/app/store/users/users.reducer';
import { Store, select } from '@ngrx/store';
import { selectUsersList, selectUserById } from 'src/app/store/users/users.selectors';
import { selectUserPostsList } from 'src/app/store/posts/posts.selectors'
import { fetchSelectedUserPostsListAction, setSelectedUserPostsListAction } from 'src/app/store/posts/posts.actions';
import { Post } from 'src/app/store/posts/posts.reducer';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnDestroy {
  selectedUser: User
  userPosts: Post[]

  constructor(
    private route: ActivatedRoute,
    private storeUsers$: Store,
    private storePosts$: Store
  ) {
    this.storeUsers$.pipe(
      select(selectUserById, { id: Number(this.route.snapshot.paramMap.get('id')) })
    ).subscribe((user: User) => this.selectedUser = user)

    this.storePosts$.pipe(
      select(selectUserPostsList)
    ).subscribe((posts: Post[]) => this.userPosts = posts)

    this.storePosts$.dispatch(new fetchSelectedUserPostsListAction({ id: Number(this.route.snapshot.paramMap.get('id')) }))
  }

  ngOnDestroy(): void {
    this.storePosts$.dispatch(new setSelectedUserPostsListAction({ posts: [] }))
  }

}
