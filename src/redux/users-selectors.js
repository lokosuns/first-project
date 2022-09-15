import {createSelector} from "reselect";

const getUsersSelector = (state) => {
    return state.usersPage.users
}

//Для сложных селекторов
export const getUsers = createSelector(getUsersSelector,(users) => {
    return users.filter(user  => true)
})

export const getPageSize = (state) => {
    return state.usersPage.pageSize
}

export const getUsersPageCount = (state) => {
    return state.usersPage.usersPageCount
}

export const getCurrentPage = (state) => {
    return state.usersPage.currentPage
}

export const getIsLoading = (state) => {
    return state.usersPage.isLoading
}

export const getFollowingInProgress = (state) => {
    return state.usersPage.followingInProgress
}