import React, { useEffect, useState } from 'react'
import { UserInterface } from '../tables/UserModel'


interface EditUserProps {
    editing: boolean;
    currentUser: UserInterface;
    updateUser: (id: any, user: any) => void;
    setEditing: (bool: boolean) => void;

}
const EditUser = ({editing, currentUser, updateUser, setEditing}: EditUserProps) => {
    const [user,setUser] = useState(currentUser);
    useEffect(() => {
        setUser(currentUser);
    }, [currentUser]);
const handleInputChange = (event: any) => {
    const {name, value} = event.target;
    setUser({...user, [name]: value});
};    

  return (
    <form
    onSubmit={(event) => {
        event.preventDefault();
        updateUser(user.id, user);
    }}
    >
        <label htmlFor="name">Name</label>
        <input
         type="text"
         name='name'
         value={user.name}
         onChange={handleInputChange} />
        <label htmlFor="username">Username</label>
        <input type="text" 
        name='username'
        value={user.username}
        onChange={handleInputChange}
        />
        <button>Update user</button>
        <button onClick={() => setEditing(false)} className='button muted-button'>Cancel</button>
    </form>
  )
}

export default EditUser