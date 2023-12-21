import React, { useState } from 'react'
import { Link, Prompt, Route } from 'react-router-dom'
import { Switch } from 'react-router-dom'
import UserDetail from './UserDetail';

const UserRoute = () => {
    const [text, setText] = useState('');
    const handleChange = (even: React.ChangeEvent<HTMLTextAreaElement>) => {
        setText(even.target.value);
    }

  return (
    <div>
        <ul>
            <li>
                <Link to="/users?userId=1&name=User1">User 1 detail</Link>
            </li>
            <li>
                <Link to="/users?userId=2&name=User2">User 2 detail</Link>
            </li>
            <li>
                <Link to="/users?userId=3&name=User3">User 3 detail</Link>
            </li>
        </ul>
        {/* <Prompt when={text.length>0} message = {"Do you want to go"}></Prompt> */}
        <textarea onChange={handleChange}></textarea>
        {/* <Switch>
            <Route path={"/users"} component={UserDetail}></Route>
        </Switch> */}
    </div>
  )
}

export default UserRoute