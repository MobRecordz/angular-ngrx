import { createFeatureSelector, createSelector } from '@ngrx/store'
import { PostsState, POSTS_NODE, UserPost } from './posts.reducer'
import { selectUsersFeature } from '../users/users.selectors'
import { UsersState } from '../users/users.reducer'

export const selectPostsFeature = createFeatureSelector<PostsState>(POSTS_NODE)

export const selectPostsList = createSelector(
    selectPostsFeature,
    (state: PostsState) => state.postsList 
)

export const selectPostsListWithUsers = createSelector(
    selectPostsFeature,
    selectUsersFeature,
    (posts: PostsState, users: UsersState) => {
        return posts.postsList.map((post) => {
            const user = users.usersList.find(user => user.id === post.userId)
            return {
                ...post,
                user
            }
        })
    }
)

export const selectUserPostById = createSelector(
    selectPostsListWithUsers,
    (postsList: UserPost[], props: { id: number }) => {
        return postsList.find(post => post.id === props.id)
    } 
)

export const selectUserPostsList = createSelector(
    selectPostsFeature,
    (posts: PostsState) => {
        return posts.selectedUserPostsList
    }
)

export const selectPostComments = createSelector(
    selectPostsFeature,
    (posts: PostsState) => {
        return posts.selectedPostComments
    }
)

export const selectSelectedPost = createSelector(
    selectPostsFeature,
    (posts: PostsState) => {
        return posts.selectedPost
    }
)