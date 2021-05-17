import React from "react";
import classes from './MyPosts.module.css';

function MyPosts() {
    return <content className={classes.content}>
        <div className={classes.posts}>
            My posts
            <div>
                <div>
                    New post
                </div>
                <div>
                    <div className={classes.item}>Post 1</div>
                    <div className={classes.item}>Post 2</div>
                </div>
            </div>
        </div>
    </content>
}

export default MyPosts;