import { Action } from '@ngrx/store'
import { Post } from './posts.reducer'

export enum postsActionType {
    fetchPostsList = '[Posts] Fetch Posts List',
    setPostsList = '[Posts] Set Posts List'
}

export class fetchPostsListAction implements Action {
    readonly type = postsActionType.fetchPostsList
}

export class setPostsListAction implements Action {
    readonly type = postsActionType.setPostsList

    constructor(public payload: { posts: Post[] }) {}
}

export type PostsActions = fetchPostsListAction | setPostsListAction