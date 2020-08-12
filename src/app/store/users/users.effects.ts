// import { Injectable } from '@angular/core'
// import { Actions, Effect, ofType } from '@ngrx/effects'
// import { usersActionType, setUsersListAction } from './users.actions'
// import { PostsService } from '../../services/posts.service'
// import { map, mergeMap } from 'rxjs/operators'

// @Injectable()
// export class AppEffects {
//     @Effect()
//     updatedAt$() {
//         return this.actions$.pipe(
//             ofType(usersActionType.fetchUsersList),
//             mergeMap(() => this.postsService.fetchPostsList().pipe(
//                 map(users => new setUsersListAction({ users }))
//             ))
//         )
//     }

//     constructor(
//         private actions$: Actions,
//         private postsService: PostsService
//     ) {}
// }