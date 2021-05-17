import React from "react";
import classes from './MyPosts.module.css';

function MyPosts() {
    return <div>
        <div className={classes.posts}>
            My posts
            <div>
                <textarea></textarea>
                <button>Add Post</button>
                <button>Remove</button>
                <div>
                    New post
                </div>
                <div>
                    <div className={classes.item}>
                        <img src='https://i.pinimg.com/originals/51/f6/fb/51f6fb256629fc755b8870c801092942.png'/>
                        Post1
                    </div>
                    <div className={classes.item}>
                        <img src='https://i.pinimg.com/originals/51/f6/fb/51f6fb256629fc755b8870c801092942.png'/>
                        Post 2
                    </div>
                    <div className={classes.item}>
                        <img src='https://i.pinimg.com/originals/51/f6/fb/51f6fb256629fc755b8870c801092942.png'/>
                        Post 3
                    </div>
                    <div className={classes.item}>
                        <img src='https://i.pinimg.com/originals/51/f6/fb/51f6fb256629fc755b8870c801092942.png'/>
                        Post 4
                    </div>
                    <div className={classes.item}>
                        <img src='https://i.pinimg.com/originals/51/f6/fb/51f6fb256629fc755b8870c801092942.png'/>
                        Post 5
                    </div>
                    <div className={classes.item}>
                        <img src='https://i.pinimg.com/originals/51/f6/fb/51f6fb256629fc755b8870c801092942.png'/>
                        Post 6
                    </div>
                </div>
            </div>
        </div>
    </div>
}

export default MyPosts;