import React from 'react';
import classes from './Post.module.css';

const Post = (props) => {
    return (
        <div className={classes.post}>
            <div className={classes.item}>{props.message}</div>
            <div className={classes.count}>{props.likeCount}</div>
        </div>
    );
}

export default Post;