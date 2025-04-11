import axios from "axios";

const api = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com'
})

export const consult = async (url: string, setData: Function) => {
    const result = await api.get(url)
    setData(result.data)
}