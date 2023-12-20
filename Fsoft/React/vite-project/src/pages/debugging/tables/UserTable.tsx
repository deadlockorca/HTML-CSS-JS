import React from 'react'
import ActionButton from '../components/ActionButton';
import {UserInterface} from './UserModel';
interface UserTablePropsInterface { 
    users: UserInterface[];
    editRow?: (user: UserInterface) => void;
    deleteUser?: (id: number) => void;
}

const UserTable = ({users, editRow, deleteUser} : UserTablePropsInterface) => {

  return (
    <table>
        <thead>
            <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Username</th>
            <th>Actions</th>
        </tr>
        </thead>
        <tbody>
            {users.length <= 0 ? ( 
                <tr>
                    <td colSpan={4}>No users</td>
                </tr>
            ) : (
                users.map((user) => (
                    <tr key={user.id}>
                        <td>{user.id}</td>
                        <td>{user.name}</td>
                        <td>{user.username}</td>
                        <td>
                            <ActionButton 
                            title='Edit' isShow={user.isEdit} action={() => editRow && editRow(user)}>
                            </ActionButton>
                            <ActionButton
                            title='Delete'
                            isShow={user.isDelete}
                            action={() => deleteUser && deleteUser(user.id)}>
                            </ActionButton>
                        </td>
                    </tr>
                ))
            )}
        </tbody>
    </table>
  );
};

export default UserTable