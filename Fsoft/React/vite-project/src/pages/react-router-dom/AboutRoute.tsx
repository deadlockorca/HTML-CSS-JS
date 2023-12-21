import React, { Fragment } from 'react'
import { useLocation, useParams } from 'react-router-dom'

interface RouteParams {
  code?: string;
  firstName?: string;
  lastName?: string;
}
const AboutRoute = () => {
  const params = useParams<RouteParams>();
  const {search} = useLocation();
  const querySearch = new URLSearchParams(search);
  console.log(params);
  console.log(querySearch.get('key1'), querySearch.get('key2'));
  return (
    <Fragment>
      <div>AboutRouter</div>
      <h2>Code : {params?.code || "---"}</h2>
      <h2>First name : {params?.firstName || "---"}</h2>
      <h2>Last Name : {params?.lastName || "---"}</h2>
      <p>Search key 1: {querySearch.get('key1')}</p>
      <p>Search key 1: {querySearch.get('key2')}</p>
    </Fragment>
  )
}

export default AboutRoute