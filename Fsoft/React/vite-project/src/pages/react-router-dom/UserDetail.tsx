import React, { Fragment } from 'react'
import { useLocation } from 'react-router-dom'

const UserDetail = () => {
    const location = useLocation();
    const queryParam = new URLSearchParams(location.search);
    console.log(queryParam);
  return (
    <Fragment>
        <div>UserId {queryParam.get("userId")}</div>
        <div>UserName {queryParam.get("name")}</div>
    </Fragment>
  );
};

export default UserDetail