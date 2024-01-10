import { Observer } from 'mobx-react'
import React, { ChangeEvent, Fragment } from 'react'
import { userStore } from '../store/user.store';
import { TextField } from '@mui/material';

const UserProfile = () => {
    let userId = ""; // move userId here

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        userId = event.target.value; // update userId here
        console.log("userId", userId);
    }

    const handleUpdate = () => {
        if(userId) {
            userStore.updateUserID(userId);
        }
    }
  return (
    <Observer>
        {() => (
            <Fragment>
                <h3>User Profile</h3>
                <TextField label='Change UserId' onChange={handleChange} defaultValue={userStore.userId}/>
            </Fragment>
        )}
    </Observer>
  )
}

export default UserProfile