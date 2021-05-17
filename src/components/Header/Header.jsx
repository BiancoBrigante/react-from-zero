import React from "react";
import classes from './Header.module.css';

function Header() {
    return <header className={classes.header}>
        <img className={classes.img}
            src="https://codesign.com.bd/conversations/content/images/2020/03/Sprint-logo-design-Codesign-agency.png"/>
    </header>
}

export default Header;