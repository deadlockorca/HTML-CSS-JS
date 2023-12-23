import React, { Fragment } from 'react'
import { withRouter } from './withRoute';

const Topics = (props: any) => {
    const queryParams = new URLSearchParams(props?.router.location?.search);
    console.log(queryParams);
  return (
    <Fragment>
        <h3>Topics of user with code: {queryParams.get("code")}</h3>
        <h3>Topics of user with first name:  {queryParams.get("firstName")}</h3>
    </Fragment>
  );
};

export default withRouter(Topics);