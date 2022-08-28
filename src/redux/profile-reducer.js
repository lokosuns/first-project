import {profileAPI} from "../api/api";

const ADD_POST = 'ADD_POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_USER_STATUS = 'SET_USER_STATUS';
const UPDATE_USER_STATUS = 'UPDATE_USER_STATUS';

let initialState = {
    postData: [
        {id: 1, message: 'Hi!', likesCount: 5},
        {id: 2, message: 'It\'s my first post', likesCount: 6},
    ],
    profile: null,
    status: 'Hello',
};

export const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            return {
                ...state,
                postData: [...state.postData, {
                    id: 3,
                    message: action.newPostText,
                    likesCount: 0,
                }]
            }
        case SET_USER_PROFILE:
            return {
                ...state, profile: action.profile
            }
        case SET_USER_STATUS:
            return {
                ...state, status: action.status
            }
        case UPDATE_USER_STATUS:
            return {
                ...state, status: action.status
            }
        default:
            return state;
    }
}

export const addPostActionCreator = (newPostText) => ({type: ADD_POST, newPostText})
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})
export const setUserStatus = (status) => ({type: SET_USER_STATUS, status})


// Thunk
export const getUserProfile = (userId) => (dispatch) => {
    profileAPI.getUserProfile(userId)
        .then(data => {
            dispatch(setUserProfile(data));
        })
}

export const getUserStatus = (userId) => (dispatch) => {
    profileAPI.getUserStatus(userId)
        .then(data => {
            dispatch(setUserStatus(data));
        })
}

export const updateUserStatus = (status) => (dispatch) => {
    profileAPI.updateUserStatus(status)
        .then(data => {
            if (data.resultCode === 0) {
                dispatch(setUserStatus(status));
            }
        })
}