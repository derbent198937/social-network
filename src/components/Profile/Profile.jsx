import React from 'react';
import My_posts from './My posts/My_posts';
import classes from  './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
    return (
        <div>
            <ProfileInfo />
            <My_posts posts={props.profilePage.posts}
                      newPostText={props.profilePage.newPostText}
                      dispatch={props.dispatch}/>
        </div>
    );
}

export default Profile;