import axios from "axios";

const api = axios.create({
    baseURL: 'https://blogpessoal-jy5z.onrender.com/'
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