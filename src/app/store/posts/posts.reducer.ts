import { PostsActions, postsActionType } from './posts.actions'
import { User } from '../users/users.reducer'

export const POSTS_NODE = 'posts'

export interface Post {
    userId: number,
    id: number,
    title: string,
    body: string   
}

export interface UserPost extends Post {
    user: User
}

export interface PostComment {
    postId: number,
    id: number,
    name: string,
    email: string,
    body: string
}

export interface PostsState {
    postsList: Array<Post>,
    selectedUserPostsList: Array<Post> // Используется на странице user-details
    selectedPost: Post | null,
    selectedPostComments: PostComment[]
    size: number
}

const initialState: PostsState = {
    postsList: [],
    selectedUserPostsList: [],
    selectedPost: null,
    selectedPostComments: [],
    size: 0
}

export const postsReducer = (state = initialState, action: PostsActions) => {
    switch(action.type) {
        case postsActionType.setPostsList:
            return {
                ...state,
                postsList: action.payload.posts
            }
        case postsActionType.setSelectedUserPostsList:
            return {
                ...state,
                selectedUserPostsList: action.payload.posts
            }
        case postsActionType.setSelectedPostComments:
            return {
                ...state,
                selectedPostComments: action.payload.comments
            }

        default: 
            return state
    }
}

// const _postsReducer = createReducer(initialState)

// export function postsReducer(state, action) {
//     return _postsReducer(state, action)
// }
