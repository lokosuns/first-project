import {profileReducer} from "./profile-reducer";
import {dialogsReducer} from "./dialogs-reducer";
import {sidebarReducer} from "./sidebar-reducer";

let store = {
    _state: {
        profilePage: {
            postData: [
                {id: 1, message: 'Hi!', likesCount: 5},
                {id: 2, message: 'It\'s my first post', likesCount: 6},
            ],
            newPostText: 'Lokomotiv',
        },
        dialogsPage: {
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
            newMessageText: '',
        },
        sidebarPage: {
            friendsData: [
                {
                    id: 1,
                    avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxLkbtTa0kfmKizxJgqECQLdlt_xq1R2jEQQ&usqp=CAU',
                    name: 'Alex'
                },
                {
                    id: 2,
                    avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxLkbtTa0kfmKizxJgqECQLdlt_xq1R2jEQQ&usqp=CAU',
                    name: 'Max'
                },
                {
                    id: 3,
                    avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxLkbtTa0kfmKizxJgqECQLdlt_xq1R2jEQQ&usqp=CAU',
                    name: 'Lola'
                },
            ],
        }
    },
    _callSubscriber() {
        console.log('Change')
    },

    getState() {
        return this._state
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {

        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebarPage = sidebarReducer(this._state.sidebarPage, action);
        this._callSubscriber(this._state);

    },

}

export default store
window.store = store;