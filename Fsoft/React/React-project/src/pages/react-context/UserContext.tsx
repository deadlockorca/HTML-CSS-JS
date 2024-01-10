import React, { Fragment, useContext, useState } from 'react'
import UserContext from './user.context'


const NotificationContextMain = React.createContext([] as string[])
const NotificationContextSub = React.createContext([] as string[])

const UseContext = () => {
    const [username, setUsername] = useState<string>("FPT")
    const [email, setEmail] = useState<string>("FPT@fpt.com")

    const userContextValue = {username, email, onUpdateUsername: setUsername, onUpdateEmail: setEmail}
    // const notificationListMain = ["Not 1", "Not 2", "Not 3"]
    // const notificationListSub = ["Not 4", "Not 5", "Not 6", "Not 7", "Not 8"]
  return (
    <UserContext.Provider value={userContextValue}>
        <UserSub></UserSub>
    </UserContext.Provider>
  )
};
const UserSub = () => {
    return <UserSub1 />
}
const UserSub1 = () => {
    return <UserSub2 />
}
const UserSub2 = () => {
    const notificationListMain = ["Not 1", "Not 2", "Not 3"]
    return(
        <NotificationContextMain.Provider value={notificationListMain}>
            <UserSub3 />
        </NotificationContextMain.Provider>
    
    )
}
const UserSub3 = () => {
    const {username, email, onUpdateUsername, onUpdateEmail} = useContext(UserContext)
    const notificationMain = useContext(NotificationContextMain)
    return(
        <Fragment>
            <h2>Component Sub 3 - Welcome to {" "}
            <span style={{color: "blue"}}>{username}</span> Academy {" "}
            </h2>
            <h3>
                Our email: <span style={{color: "orangered"}}>{email}</span>{" "}
            </h3>
            <h3>We have {notificationMain.length} new notifications</h3>
            <ul>
                {notificationMain.map((noti, index) => (
                    <li key={index}>{noti}</li>
                ))}
            </ul>
            <button className='btn btn-primary' onClick={() => onUpdateUsername("FPT Software")}>Change username</button>
            <button className='btn btn-primary' onClick={() => onUpdateEmail("Fsoft@fpt.com.vn")}>Change Email</button>
            <UserSub4 />
            <hr />
        </Fragment>
    )
}
const UserSub4 = () => {
    return <UserSub5 />
}
const UserSub5 = () => {
    const notificationListSub = ["Not 4", "Not 5", "Not 6", "Not 7", "Not 8"]
    return (
        <NotificationContextSub.Provider value={notificationListSub}>
            <UserMain />
        </NotificationContextSub.Provider>
    )
}

const UserMain = () => {
    const {username, email, onUpdateUsername, onUpdateEmail} = useContext(UserContext)
    return (
        <Fragment>
            <h2>Welcome to {username} Academy</h2>
            <h3>Our email: {email}</h3>
            <button onClick={() => onUpdateUsername('FPT Software')}>Change username</button>
            <button onClick={() => onUpdateEmail('Fsoft@fpt.com.vn')}>Change email</button>
        </Fragment>
    )
}

export default UseContext