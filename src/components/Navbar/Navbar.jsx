import React from "react";
import classes from './Navbar.module.css';

function Navbar() {
    return <nav className={classes.nav}>
        <ul>
            <li className={classes.item}><a>Profile</a></li>
            <li className={`${classes.item} ${classes.active}`}><a>Messages</a></li>
            <li className={classes.item}><a>News</a></li>
            <li className={classes.item}><a>Music</a></li>
        </ul>
    </nav>
}

export default Navbar;