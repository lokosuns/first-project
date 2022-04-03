import classes from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {

    let dialogData = [
        {id: 1, name: 'Alex'},
        {id: 2, name: 'Max'},
        {id: 3, name: 'Lola'},
        {id: 4, name: 'KirReal'},
    ]

    let messageData = [
        {id: 1, message: 'Hi!'},
        {id: 2, message: 'How is your name?'},
        {id: 3, message: 'Yo!'},
        {id: 4, message: 'Yo!'},
        {id: 5, message: 'Yo!'},
    ]

    let dialogElements = dialogData.map(dialog =>
        <DialogItem id={dialog.id} name={dialog.name}/>
    )

    let messagesElements = messageData
        .map(text => <Message message={text.message}/>)

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogElements}
            </div>
            <div className={classes.messages}>
                {messagesElements}
            </div>
        </div>
    )
}

export default Dialogs