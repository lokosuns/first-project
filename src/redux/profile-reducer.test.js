import {addPost, deletePost, profileReducer} from "./profile-reducer";

let state = {
        postData: [
            {id: 1, message: 'Hi!', likesCount: 5},
            {id: 2, message: 'It\'s my first post', likesCount: 6},
        ],
        profile: null,
        status: '',
    }

it('length posts should be incremented', () => {

    // 1. test data
    let action = addPost("My first test")

    // 2. action
    const newState = profileReducer(state, action)

    // 3. expectation
    expect(newState.postData.length).toBe(3)
})

it('message of new post should be "My first test"', () => {

    // 1. test data
    let action = addPost("My first test")

    // 2. action
    const newState = profileReducer(state, action)

    // 3. expectation
    expect(newState.postData[newState.postData.length - 1].message).toBe("My first test")
})

it('likesCount of new post should be zero', () => {

    // 1. test data
    let action = addPost("My first test")

    // 2. action
    const newState = profileReducer(state, action)

    // 3. expectation
    expect(newState.postData[newState.postData.length - 1].likesCount).toBe(0)
})

it('after del length posts should be decremented', () => {

    // 1. test data
    let action = deletePost(1)

    // 2. action
    const newState = profileReducer(state, action)

    // 3. expectation
    expect(newState.postData.length).toBe(1)
})

it('after del length posts should not be decremented if id is incorrect', () => {

    // 1. test data
    let action = deletePost(5)

    // 2. action
    const newState = profileReducer(state, action)

    // 3. expectation
    expect(newState.postData.length).toBe(2)
})