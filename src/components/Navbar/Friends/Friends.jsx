import React from 'react';
import classes from './Friends.module.css';

const Friends = (props) => {
    return (
        <div>
            <div className={classes.friend}>
                <img className={classes.avatar} src="https://media.istockphoto.com/vectors/user-icon-flat-isolated-on-white-background-user-symbol-vector-vector-id1300845620?k=20&m=1300845620&s=612x612&w=0&h=f4XTZDAv7NPuZbG0habSpU0sNgECM0X7nbKzTUta3n8=" alt=""/>
                {props.name}
            </div>
        </div>
    )
}

export default Friends;