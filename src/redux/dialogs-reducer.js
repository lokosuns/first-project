const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE = 'UPDATE-NEW-MESSAGE';

let initialState = {
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
};

export const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            return {
                ...state,
                newMessageText: '',
                messageData: [...state.messageData, {id: 6, message: state.newMessageText}]
            };
        case UPDATE_NEW_MESSAGE:
            return {
                ...state,
                newMessageText: action.newMessage
            };
        default:
            return state;

    }
}

export const sendMessageCreator = () => ({type: ADD_MESSAGE})

export const updateNewMessageBodyCreator = (body) =>
    ({type: UPDATE_NEW_MESSAGE, newMessage: body})
