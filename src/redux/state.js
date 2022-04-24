import {rerenderEntireTree} from "../render";

export const state = {
    profilePage: {
        postData: [
            {id: 1, message: 'Hi!', likesCount: 5},
            {id: 2, message: 'It\'s my first post', likesCount: 6},
        ],
        newPostText: 'Lokomotiv',
    },
    messagePage: {
        dialogData: [
            {id: 1, name: 'Alex'},
            {id: 2, name: 'Max'},
            {id: 3, name: 'Lola'},
            {id: 4, name: 'KirReal'},
        ],
        messageData: [
            {id: 1, message: 'Hi!'},
            {id: 2, message: 'How is your name?'},
            {id: 3, message: 'Yo!'},
            {id: 4, message: 'Yo!'},
            {id: 5, message: 'Yo!'},
        ],
    },
    sidebarPage: {
        friendsData: [
            {id: 1, avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxLkbtTa0kfmKizxJgqECQLdlt_xq1R2jEQQ&usqp=CAU', name: 'Alex'},
            {id: 2, avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxLkbtTa0kfmKizxJgqECQLdlt_xq1R2jEQQ&usqp=CAU', name: 'Max'},
            {id: 3, avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxLkbtTa0kfmKizxJgqECQLdlt_xq1R2jEQQ&usqp=CAU', name: 'Lola'},
        ],
    }
}

window.state = state;

export const updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;
    rerenderEntireTree(state);
}

export const addPost = () => {
    let newPost = {
        id: 3,
        message: state.profilePage.newPostText,
        likesCount: 0,
    };
    state.profilePage.postData.push(newPost);
    state.profilePage.newPostText = '';
    rerenderEntireTree(state);
}