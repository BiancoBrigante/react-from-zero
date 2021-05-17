import React from "react";
import classes from './Post.module.css';

function Post() {
    return <div>
        <div className={classes.item}>
            <img src='https://i.pinimg.com/originals/51/f6/fb/51f6fb256629fc755b8870c801092942.png'/>
            Post1
        </div>
    </div>
}

export default Post;