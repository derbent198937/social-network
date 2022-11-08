import React from 'react';
import classes from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/state";

const Dialogs = (props) => {
    let state = props.store.getState().dialogsPage;

    let dialogsElements = state.dialogs.map( d => <DialogItem name={d.name} id={d.id} /> );
    let messagesElements = state.messages.map( m => <Message message={m.message}/> );
    let newMessageBody = state.newMessageBody;

    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageCreator());
    }

    let onNewMessageChange = (event) => {
        let body = event.target.value;
        props.store.dispatch(updateNewMessageBodyCreator(body));
    }

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                { dialogsElements }
            </div>

            <div className={classes.messages}>
                <div>
                    <div>
                        <textarea className={ classes.textInput }
                                  placeholder='Enter your message'
                                  onChange={onNewMessageChange}
                                  value={ newMessageBody }/>
                    </div>
                    <div>
                        <button className={classes.btnMessage} onClick={ onSendMessageClick }>Add Message</button>
                    </div>

                </div>
                { messagesElements }
            </div>
        </div>
    )
}

export default Dialogs;