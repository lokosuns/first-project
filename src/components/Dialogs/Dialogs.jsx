import classes from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import React from "react";
import {
    sendMessageCreator,
    updateNewMessageBodyCreator
} from "../../redux/dialogs-reduser";

export const Dialogs = (props) => {

    let state = props.store.getState().messagePage;

    let dialogElements = state.dialogData.map(dialog =>
        <DialogItem id={dialog.id} name={dialog.name}/>
    )

    let messagesElements = state.messageData
        .map(text => <Message message={text.message}/>)

    let newMessageBody = state.newMessageText;

    let onNewMessageChange = (e) => {
        let body = e.target.value;
        props.store.dispatch(updateNewMessageBodyCreator(body));
    }

    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageCreator());
    }

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogElements}
            </div>
            <div className={classes.messages}>
                {messagesElements}
                <div>
                    <textarea
                        placeholder={'Enter your message'}
                        onChange={onNewMessageChange}
                        value={newMessageBody}/>
                </div>
                <div>
                    <button onClick={onSendMessageClick}>Add message</button>
                </div>
            </div>

        </div>
    )
}