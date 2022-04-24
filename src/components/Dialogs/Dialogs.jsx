import classes from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import React from "react";

export const Dialogs = (props) => {

    let dialogElements = props.state.dialogData.map(dialog =>
        <DialogItem id={dialog.id} name={dialog.name}/>
    )

    let messagesElements = props.state.messageData
        .map(text => <Message message={text.message}/>)

    let newMessageElement = React.createRef();

    let addPost = () => {
        let text = newMessageElement.current.value;
        alert(text);
    }

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogElements}
            </div>
            <div className={classes.messages}>
                {messagesElements}
            </div>
            <div>
                <textarea ref={newMessageElement}></textarea>
            </div>
            <div>
                <button onClick={addPost}>Add message</button>
            </div>
        </div>
    )
}