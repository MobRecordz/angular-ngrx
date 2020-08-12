import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { User, UsersState } from 'src/app/store/users/users.reducer';
import { selectUsersList } from 'src/app/store/users/users.selectors';
import { select, Store } from '@ngrx/store';
import { selectPostsList, selectPostsListWithUsers } from 'src/app/store/posts/posts.selectors';
import { tap, map, filter } from 'rxjs/operators';
import { fetchUsersListAction } from 'src/app/store/users/users.actions';

@Component({
  selector: 'app-users',
  templateUrl: './users-page.component.html',
  styleUrls: ['./users-page.component.scss']
})
export class UsersComponent implements OnInit {

  public searchValue: string = ''
  public usersList$: Observable<User[]> = this.storeUsers$.pipe(
    select(selectUsersList, { search: this.searchValue }),
    // tap(v => console.log('USER-PAGE', v))
  )

  constructor(private storeUsers$: Store<UsersState>) {}

  ngOnInit(): void {
    // this.storeUsers$.dispatch(new fetchUsersListAction())
  }

}
