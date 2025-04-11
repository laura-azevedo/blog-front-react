import { createContext, ReactNode, useState } from "react"

import { login } from "../services/Service"
import UserLogin from "../models/UserLogin"

interface AuthContextProps {
    user: UserLogin
    handleLogout(): void
    handleLogin(user: UserLogin): Promise<void>
    isLoading: boolean
}

interface AuthProviderProps {
    children: ReactNode
}

export const AuthContext = createContext({} as AuthContextProps)

export function AuthProvider({ children }: AuthProviderProps) {

    const [user, setuser] = useState<UserLogin>({
        id: 0,
        name: "",
        user: "",
        password: "",
        photo: "",
        token: ""
    })

    const [isLoading, setIsLoading] = useState(false)

    async function handleLogin(UserLogin: UserLogin) {
        setIsLoading(true)
        try {
            await login(`/users/logar`, UserLogin, setuser)
            alert("O Usuário foi autenticado com sucesso!")
        } catch (error) {
            alert("Os Dados do usuário estão inconsistentes!")
        }
        setIsLoading(false)
    }

    function handleLogout() {
        setuser({
            id: 0,
            name: "",
            user: "",
            password: "",
            photo: "",
            token: ""
        })
    }

    return (
        <AuthContext.Provider value={{ user, handleLogin, handleLogout, isLoading }}>
            {children}
        </AuthContext.Provider>
    )
}