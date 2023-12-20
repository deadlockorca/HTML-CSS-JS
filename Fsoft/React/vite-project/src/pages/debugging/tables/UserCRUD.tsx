import React, { Fragment, useState } from 'react'
import UserTable from './UserTable';
import EditUser from '../forms/EditUser';

interface UserInterface {
    id: number;
    name: string;
    username: string;
    isEdit: boolean;
    isDelete: boolean;
}

const UserCRUD = () => {
    const usersData: UserInterface[] = [ 
        {id: 1, 
        name: "Thuyet",
        username: "ThuetCT",
        isEdit: true,
        isDelete: false},
        {id: 2, 
        name: "Huyen",
        username: "HuyenDT",
        isEdit: true,
        isDelete: false},
        {id: 3, name: "Ngoc", username: "NgocLB", isEdit: true, isDelete: false},
        {id: 4, name: "Hieu", username: "HieuBM", isEdit: true, isDelete: false},
        {id: 5, name: "Phu", username: "PhuNM", isEdit: true, isDelete: true}
    ];
    const initialFormState = {id: 0, name: "", username:""};
    const [users, setUsers] = useState(usersData);
    const [currentUser, setCurrentUser] = useState(initialFormState);
    const [editing, setEditing] = useState(false);
    const editRow = (user: UserInterface) => {
        console.log('Edit');
        setEditing(true);
        setCurrentUser({id: user.id, name: user.name, username: user.username});
    };
    const deleteUser = (userId: number) => {
        console.log('Delete');
        setEditing(false);
        setUsers(users.filter(user => user.id === userId));
    }
    const updateUser = (id: any, updateUser: UserInterface) =>{
        setEditing(false);
        setUsers(users.map(user => (user.name === id ? updateUser : user)));
    }
  return (
    <div className='container'>
        <h2>CRUD APP</h2>
        <div className='flex-row'>
            <div className='flex-large'>
                {editing ? (
                    <>
                        <h3>Editing User</h3>
                    <EditUser editing={editing} currentUser={currentUser}
                    updateUser={updateUser} setEditing={setEditing}/>
                    </>
                 ): (
                    <Fragment>
                        <h3>Create User</h3>
                        Form to create user
                    </Fragment>
                 )}
            </div>
            <div className='flex-large'>
                <h3>View Users</h3>
                <UserTable users={users}></UserTable>
            </div>
        </div>
    </div>
  )
}

export default UserCRUD