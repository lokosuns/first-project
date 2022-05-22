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

export const dialogsReducer = (state=initialState, action) => {
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
