import React from 'react';
import classes from './Navbar.module.css';
import Friends from "./Friends/Friends";
import {NavLink} from "react-router-dom";

const Navbar = (props) => {
    let friendsElements = props.state.friends.map( f => <Friends name={f.name} /> );

    return (
        <div>
            <nav className={classes.nav}>
                <div className={classes.item}>
                    <NavLink to='/Profile' className={ navData => navData.isActive ? classes.active : classes.item }>Profile</NavLink>
                </div>
                <div className={classes.item}>
                    <NavLink to='Dialogs' className = { navData => navData.isActive ? classes.active : classes.item }>Messages</NavLink>
                </div>
                <div className={classes.item}>
                    <NavLink to='News' className={ navData => navData.isActive ? classes.active : classes.item }>News</NavLink>
                </div>
                <div className={classes.item}>
                    <NavLink to='Music' className={ navData => navData.isActive ? classes.active : classes.item }>Music</NavLink>
                </div>
                <div className={classes.item}>
                    <NavLink to='Settings' className={ navData => navData.isActive ? classes.active : classes.item }>Settings</NavLink>
                </div>

                <div className={classes.friendsBlock}>
                    <div>
                        <h2>Friends</h2>
                    </div>
                    <div className={classes.friendsList}>
                        { friendsElements }
                    </div>
                </div>
            </nav>


        </div>
    )
}

export default Navbar;