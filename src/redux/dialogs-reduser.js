const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE = 'UPDATE-NEW-MESSAGE';

export const dialogsReduser = (state, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            let body = state.newMessageText;
            state.newMessageText = '';
            let newMessage = {id: 6, message: body};
            state.messageData.push(newMessage);
            return state;
        case UPDATE_NEW_MESSAGE:
            state.newMessageText = action.newMessage;
            return state;
        default:
            return state;

    }
}

export const sendMessageCreator = () => ({type: ADD_MESSAGE})

export const updateNewMessageBodyCreator = (body) =>
    ({type: UPDATE_NEW_MESSAGE, newMessage: body})
