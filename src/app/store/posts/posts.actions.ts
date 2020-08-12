import { Action } from '@ngrx/store'
import { Post } from './posts.reducer'

export enum postsActionType {
    fetchPostsList = '[Posts] Fetch Posts List',
    setPostsList = '[Posts] Set Posts List',
    fetchSelectedUserPostsList = '[Posts] Fetch Selected User Posts List',
    setSelectedUserPostsList = '[Posts] Set Selected User Posts List'
}

export class fetchPostsListAction implements Action {
    readonly type = postsActionType.fetchPostsList
}

export class setPostsListAction implements Action {
    readonly type = postsActionType.setPostsList

    constructor(public payload: { posts: Post[] }) {}
}

export class fetchSelectedUserPostsListAction implements Action {
    readonly type = postsActionType.fetchSelectedUserPostsList

    constructor(public payload: { id: number }) {}
}

export class setSelectedUserPostsListAction implements Action {
    readonly type = postsActionType.setSelectedUserPostsList

    constructor(public payload: { posts: Post[] }) {}
}

export type PostsActions = 
    fetchPostsListAction | 
    setPostsListAction |
    fetchSelectedUserPostsListAction |
    setSelectedUserPostsListAction