const SEND_MESSAGE = 'SEND_MESSAGE';

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
};

export const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            return {
                ...state,
                messageData: [...state.messageData, {id: 6, message: action.newMessageBody}]
            };
        default:
            return state;

    }
}

export const sendMessageCreator = (newMessageBody) => ({type: SEND_MESSAGE, newMessageBody})

