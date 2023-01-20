import { createContext, useContext, useState } from 'react';
import { STORAGE_KEY_USER } from '../const/StorageKeys';
import { storageRead } from '../utils/Storage';

const UserContext = createContext()

export const useUser = () => {
    return useContext(UserContext) // { user, setUser }
}

const UserProvider = ({ children }) => {
    // magic strings or number is string and numbers that have no mening!
    const [user, setUser] = useState(storageRead(STORAGE_KEY_USER));

    const state = { user, setUser }

    return (
        <UserContext.Provider value={state}>
            {children}
        </UserContext.Provider>
    )
}

export default UserProvider