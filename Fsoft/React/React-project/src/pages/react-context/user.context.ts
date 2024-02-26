import React, { createContext } from 'react';

const UserContext = createContext({
    username: '',
    email: '',
    onUpdateUsername: (value: string) => {},
    onUpdateEmail: (value: string) => {}
});

export default UserContext;