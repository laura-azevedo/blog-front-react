import axios from "axios";

const api = axios.create({
    baseURL: import.meta.env.VITE_APP_URL
})

export const consult = async (url: string, setData: Function) => {
    const response = await api.get(url)
    setData(response.data)
}

export const registerUser = async (url: string, dados: Object, setData: Function) => {
    const response = await api.post(url, dados)
    setData(response.data)
}

export const login = async (url: string, dados: Object, setData: Function) => {
    const response = await api.post(url, dados)
    setData(response.data)
}

export const search = async (url: string, setData: Function, header: Object) => {
    const response = await api.get(url, header)
    setData(response.data)
}

export const register = async (url: string, dados: Object, setData: Function, header: Object) => {
    const response = await api.post(url, dados, header)
    setData(response.data)
}

export const update = async (url: string, dados: Object, setData: Function, header: Object) => {
    const response = await api.put(url, dados, header)
    setData(response.data)
}

export const deletar = async (url: string, header: Object) => {
    await api.delete(url, header)
}