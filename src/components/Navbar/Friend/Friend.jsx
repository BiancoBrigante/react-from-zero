import React from "react";
import classes from './Friends.module.css';

function Friends(props) {
    return <div>
        <img src={props.avatar}/>
        <div>{props.name}</div>
    </div>
}

export default Friends;