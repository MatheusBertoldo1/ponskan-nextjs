import axios from "axios"

const baseURL = 'http://localhost:8080'

export const api = axios.create({
    baseURL: baseURL,
    withCredentials: true // Navegador anexa os cookies automaticamente nas requisições 
})

