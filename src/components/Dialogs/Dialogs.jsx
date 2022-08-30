import classes from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import React from "react";
import {Navigate} from "react-router-dom";
import Field from "redux-form/lib/Field";
import ReduxForm from "redux-form/lib/reduxForm";
import {TextArea} from "../common/FormsControls/FormsControls";
import {maxLengthCreator, required} from "../../utils/validators/validators";

const maxLength30 = maxLengthCreator(30)

const Dialogs = (props) => {

    let state = props.dialogsPage;

    let dialogElements = state.dialogData.map(dialog =>
        <DialogItem id={dialog.id} name={dialog.name} key={dialog.id}/>
    )

    let messagesElements = state.messageData
        .map(text => <Message message={text.message} key={text.id}/>)

    if (!props.isAuth) {
        return <Navigate to={'/login'}/>
    }

    const addNewMessage = (values) => {
        props.sendMessage(values.newMessageBody)
    }

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogElements}
            </div>
            <div className={classes.messages}>
                {messagesElements}

            </div>
            <AddMessageReduxForm onSubmit={addNewMessage}/>
        </div>
    )
}

const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field
                    placeholder={'Enter your message'}
                    name={'newMessageBody'}
                    component={TextArea}
                    validate={[required, maxLength30]}
                />
            </div>
            <div>
                <button>Add message</button>
            </div>
        </form>
    )
}

const AddMessageReduxForm = ReduxForm({
    form: 'dialogAddMessageForm'
})(AddMessageForm)

export default Dialogs
