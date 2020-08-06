import { usersActionType } from './users.actions'

export const USERS_NODE = 'users'

export interface User {
    id: number,
    name: string,
    username: string,
    email: string,
    address: {
        street: string,
        suite: string,
        city: string,
        zipcode: string,
        geo: {
            lat: string,
            lng: string
        }
    },
    phone: string,
    website: string,
    company: {
        name: string,
        catchPhrase: string,
        bs: string,
    }
}

export interface UsersState {
    usersList: Array<User>,
    size: number
}

const initialState: UsersState = {
    usersList: [],
    size: 0
}

export const usersReducer = (state = initialState, action) => {
    switch(action.type) {
        case usersActionType.setUsersList:
            return {
                ...state,
                usersList: action.payload.users
            }

        default: 
            return state
    }
}