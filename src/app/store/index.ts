import {
    ActionReducer,
    ActionReducerMap,
    createFeatureSelector,
    createSelector,
    MetaReducer
} from '@ngrx/store'

import { environment } from '../../environments/environment'
import { PostsState, postsReducer, POSTS_NODE } from './posts/posts.reducer'
import { USERS_NODE, UsersState, usersReducer } from './users/users.reducer'

export interface State {
    // [countNode]: CountState,
    [POSTS_NODE]: PostsState,
    [USERS_NODE]: UsersState
}

export const appReducers: ActionReducerMap<State, any> = {
    // [countNode]: countReducer,
    [POSTS_NODE]: postsReducer,
    [USERS_NODE]: usersReducer
}

export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : []