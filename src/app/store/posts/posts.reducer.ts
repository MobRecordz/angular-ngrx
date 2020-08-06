import { PostsActions, postsActionType } from './posts.actions'

export const POSTS_NODE = 'posts'

export interface Post {
    userId: number,
    id: number,
    title: string,
    body: string   
}

export interface PostsState {
    postsList: Array<Post>,
    size: number
}

const initialState: PostsState = {
    postsList: [],
    size: 0
}

export const postsReducer = (state = initialState, action: PostsActions) => {
    switch(action.type) {
        case postsActionType.setPostsList:
            return {
                ...state,
                postsList: action.payload.posts
            }

        default: 
            return state
    }
}

// const _postsReducer = createReducer(initialState)

// export function postsReducer(state, action) {
//     return _postsReducer(state, action)
// }
