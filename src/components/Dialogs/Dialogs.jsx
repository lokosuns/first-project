import classes from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import React from "react";
import {Navigate} from "react-router-dom";

const Dialogs = (props) => {

    let state = props.dialogsPage;

    let dialogElements = state.dialogData.map(dialog =>
        <DialogItem id={dialog.id} name={dialog.name} key={dialog.id}/>
    )

    let messagesElements = state.messageData
        .map(text => <Message message={text.message} key={text.id}/>)

    let newMessageBody = state.newMessageText;

    let onNewMessageChange = (e) => {
        let body = e.target.value;
        props.updateNewMessageBody(body)
    }

    let onSendMessageClick = () => {
        props.sendMessage()
    }

    if (!props.isAuth) {
       return <Navigate to={'/login'} />
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

export default Dialogs