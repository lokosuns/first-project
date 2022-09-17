import {profileAPI} from "../api/api";

const ADD_POST = 'ADD_POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_USER_STATUS = 'SET_USER_STATUS';
const UPDATE_USER_STATUS = 'UPDATE_USER_STATUS';
const DELETE_POST = 'DELETE_POST';

let initialState = {
    postData: [
        {id: 1, message: 'Hi!', likesCount: 5},
        {id: 2, message: 'It\'s my first post', likesCount: 6},
    ],
    profile: null,
    status: '',
};

export const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            return {
                ...state,
                postData: [...state.postData, {
                    id: state.postData.length + 1,
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
        case DELETE_POST:
            return {
                ...state,
                postData: state.postData.filter(post => post.id !== action.postId)
            }
        default:
            return state;
    }
}

export const addPost = (newPostText) => ({type: ADD_POST, newPostText})
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})
export const setUserStatus = (status) => ({type: SET_USER_STATUS, status})
export const deletePost = (postId) => ({type: DELETE_POST, postId})

// Thunk
export const getUserProfile = (userId) => async (dispatch) => {
    const data = await profileAPI.getUserProfile(userId)
    dispatch(setUserProfile(data));
}

export const getUserStatus = (userId) => async (dispatch) => {
    const data = await profileAPI.getUserStatus(userId)
    dispatch(setUserStatus(data));
}

export const updateUserStatus = (status) => async (dispatch) => {
    const data = await profileAPI.updateUserStatus(status)
    if (data.resultCode === 0) {
        dispatch(setUserStatus(status));
    }
}