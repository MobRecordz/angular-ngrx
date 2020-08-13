import { createFeatureSelector, createSelector } from '@ngrx/store'
import { UsersState, USERS_NODE } from './users.reducer'

export const selectUsersFeature = createFeatureSelector<UsersState>(USERS_NODE)

export const selectUsersList = createSelector(
    selectUsersFeature,
    (state: UsersState) => {
        return state.usersList
    }
)

export const selectUserById = createSelector(
    selectUsersFeature,
    (state: UsersState, props) => {
        return state.usersList.find(user => user.id === Number(props.id))
    }
)