import {usersAPI} from "../api/api";
import {updateObjectInArray} from "../utils/object-helpers";

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_USERS_TOTAL_COUNT = 'SET_USERS_TOTAL_COUNT'
const TOGGLE_IS_LOADING = 'TOGGLE_IS_LOADING'
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS'

let initialState = {
    users: [],
    pageSize: 5,
    usersPageCount: 0,
    currentPage: 1,
    isLoading: false,
    followingInProgress: []
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: updateObjectInArray(
                    state.users,
                    action.userId,
                    "id",
                    {followed: true})
            }

        case UNFOLLOW:
            return {
                ...state,
                users: updateObjectInArray(
                    state.users,
                    action.userId,
                    "id",
                    {followed: false})
            }

        case SET_USERS:
            return {
                ...state, users: action.users
            }
        case SET_CURRENT_PAGE:
            return {
                ...state, currentPage: action.currentPage
            }
        case SET_USERS_TOTAL_COUNT:
            return {
                ...state, usersPageCount: action.count
            }
        case TOGGLE_IS_LOADING:
            return {
                ...state, isLoading: action.isLoading
            }
        case TOGGLE_IS_FOLLOWING_PROGRESS:
            return {
                ...state,
                followingInProgress: action.isLoading
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id !== action.userId)
            }
        default:
            return state;
    }
}

export const followSuccess = (userId) => ({
    type: FOLLOW, userId
})

export const unfollowSuccess = (userId) => ({
    type: UNFOLLOW, userId
})

export const setUsers = (users) => ({
    type: SET_USERS, users
})

export const setCurrentPage = (currentPage) => ({
    type: SET_CURRENT_PAGE, currentPage
})

export const setTotalUsersCount = (totalUsersCount) => ({
    type: SET_USERS_TOTAL_COUNT, count: totalUsersCount
})

export const toggleIsLoading = (isLoading) => ({
    type: TOGGLE_IS_LOADING, isLoading
})

export const toggleFollowingInProgress = (isLoading, userId) => ({
    type: TOGGLE_IS_FOLLOWING_PROGRESS, isLoading, userId
})

// ThunkCreator обернут вокруг Thunk
export const requestUsers = (page, pageSize) => async (dispatch) => {
    dispatch(toggleIsLoading(true));
    dispatch(setCurrentPage(page));

    const data = await usersAPI.getUsers(page, pageSize)
    dispatch(toggleIsLoading(false));
    dispatch(setUsers(data.items));
    dispatch(setTotalUsersCount(data.totalCount));
}

const followUnfollowFlow = async (dispatch, userId, apiMethod, actionCreator) => {

    dispatch(toggleFollowingInProgress(true, userId))
    const data = await apiMethod(userId)
    if (data.resultCode === 0) {
        dispatch(actionCreator(userId))
    }
    dispatch(toggleFollowingInProgress(false, userId))
}

export const follow = (userId) => async (dispatch) => {
    const apiMethod = usersAPI.follow.bind(usersAPI)

    followUnfollowFlow(dispatch, userId, apiMethod, followSuccess)
}

export const unfollow = (userId) => async (dispatch) => {
    const apiMethod = usersAPI.unfollow.bind(usersAPI)

    followUnfollowFlow(dispatch, userId, apiMethod, unfollowSuccess)
}

export default usersReducer;