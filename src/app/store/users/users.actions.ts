import { Action } from '@ngrx/store'
import { User } from './users.reducer'

export enum usersActionType {
    fetchUsersList = '[Users] Fetch Users List',
    setUsersList = '[Users] Set Users List'
}

export class fetchUsersListAction implements Action {
    readonly type = usersActionType.fetchUsersList
}

export class setUsersListAction implements Action {
    readonly type = usersActionType.setUsersList

    constructor(public payload: { users: User[] }) {}
}

export type UsersActions = fetchUsersListAction | setUsersListAction