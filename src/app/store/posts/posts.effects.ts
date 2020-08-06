import { Injectable } from '@angular/core'
import { Actions, Effect, ofType } from '@ngrx/effects'
import { map, mergeMap } from 'rxjs/operators'
import { postsActionType, setPostsListAction } from './posts.actions'
import { usersActionType, setUsersListAction } from '../users/users.actions'
import { PostsService } from '../../services/posts.service'
import { UsersService } from 'src/app/services/users.service'

@Injectable()
export class AppEffects {
    @Effect()
    fetchPostsList$() {
        return this.actions$.pipe(
            ofType(postsActionType.fetchPostsList),
            mergeMap(() => this.postsService.fetchPostsList().pipe(
                map(posts => new setPostsListAction({ posts }))
            ))
        )
    }

    @Effect()
    fetchUsersList$() {
        return this.actions$.pipe(
            ofType(usersActionType.fetchUsersList),
            mergeMap(() => this.usersService.fetchUsersList().pipe(
                map(users => new setUsersListAction({ users }))
            ))
        )
    }

    constructor(
        private actions$: Actions,
        private postsService: PostsService,
        private usersService: UsersService
    ) {}
}