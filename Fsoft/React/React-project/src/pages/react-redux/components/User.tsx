import React, { useEffect } from 'react'
import { fetchUserAction } from '../actions/user.action';
import { RootState } from '../types/model';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

const UserProfile = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchUserAction());
    },[]);

    const userState = useSelector((state: RootState) => state.user);
    console.log('userState', userState);
  return (
    <div>User Profile</div>
  )
}
export default UserProfile