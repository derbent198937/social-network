import React from 'react';
import classes from './My_posts.module.css';
import Post from './Post/Post';
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/state";

const My_posts = (props) => {
    let postsElement =props.posts.map( p => <Post message={p.message} likeCount={p.likeCount} />);

    let newPostElement = React.createRef();

    let addPost = () => {
        props.dispatch(addPostActionCreator());
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.dispatch(updateNewPostTextActionCreator(text));
    }

    return (
        <div className={ classes.my_posts }>

            <div>
                <h2>My posts</h2>
            </div>
            <div>
                <textarea className={ classes.input }
                          ref={ newPostElement }
                          onChange={onPostChange}
                          value={props.newPostText}/>
            </div>
            <div>
                <button className={ classes.post_btn } onClick={ addPost }>Add post</button>
            </div>
            <div className={ classes.posts }>
                { postsElement }
            </div>

          </div>
    )
}

export default My_posts;