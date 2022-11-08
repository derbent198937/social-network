import React from 'react';
import classes from  './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img className={classes.profile__img} src='https://bipbap.ru/wp-content/uploads/2017/04/0_7c779_5df17311_orig.jpg' />
            </div>

            <div className={classes.description_block}>
                <div className={classes.avatar}>
                    <img className={classes.ava__img} src='https://i.pinimg.com/236x/f3/fe/1d/f3fe1dd69bf54aa4822e9aab096afc62.jpg' />
                </div>

                <div className={classes.description}>
                    Maria Morozova
                </div>
            </div>
        </div>
    );
}

export default ProfileInfo;