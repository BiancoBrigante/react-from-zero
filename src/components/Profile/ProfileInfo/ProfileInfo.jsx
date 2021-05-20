import React from "react";
import classes from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";

function Profile() {
    return <div>
        <ProfileInfo/>

        <div>
            <img className={classes.hero}
                 src="https://www.iphonehacks.com/wp-content/uploads/2019/11/Anamorphic-Pro-Visual-Effects-Mac-Bundle.jpg"/>
        </div>
        <div>
            avatar + description
        </div>

        <MyPosts/>
    </div>
}

export default Profile;