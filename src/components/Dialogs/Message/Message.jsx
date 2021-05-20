import React from "react";
import classes from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

function DialogItem(props) {
    let path = '/dialogs/' + props.id;
    return <div className={`${classes.dialog} ${classes.active}`}>
        <NavLink to={path}>{props.name}</NavLink>
    </div>
}

function Message(props) {
    return <div className={classes.message}>{props.message}</div>
}

function Dialogs() {
    let dialogs = [{id: 1, name: 'Dima'},
        {id: 2, name: 'Andrey'},
        {id: 3, name: 'Sveta'},
        {id: 4, name: 'Sasha'},
        {id: 5, name: 'Viktor'},
        {id: 6, name: 'Valera'}];

    let messages = [{id: 1, message: 'Hi'},
        {id: 2, message: 'Chert'},
        {id: 3, message: 'How r u'},
        {id: 4, message: 'Debich'},
        {id: 5, message: 'Abobus'},
        {id: 6, message: 'Tutututu tururu'}];

    let dialogsElements = dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>)

    let messagesElements = messages.map(message => <Message message={message.message}/>)

    return <div className={classes.dialogs}>
        <div className={classes.dialogsItems}>
            {dialogsElements}
        </div>
        <div className={classes.messages}>
            {messagesElements}
        </div>
    </div>
}

export default Dialogs