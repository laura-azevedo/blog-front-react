import { ReactNode, createContext, useState } from "react";

interface UserContextProps {
    name: string
    changeName: (name: string) => void
}

interface UserProviderProps {
    children: ReactNode
}

export const UserContext = createContext({} as UserContextProps)

export function UserProvider({ children }: UserProviderProps) {
    const [name, setName] = useState('');

    function changeName(name: string) {
        setName(name)
    }

    return (
        <UserContext.Provider value={{ name, changeName }}>
            {children}
        </UserContext.Provider>
    )
}