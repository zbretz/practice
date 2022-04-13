import React from 'react'

const user = {
    is_logged_in: true
}

const UserContext = React.createContext(user);

function UserProvider(props) {
    return (
        <UserContext.Provider value={{is_logged_in: user.is_logged_in}}>
            {props.children}
        </UserContext.Provider>
    );
}

export {UserContext, UserProvider};