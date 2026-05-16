'use server'

import { api } from "./api";
import { LoginData } from "@/schemas/login";
import { SignUpData } from "@/schemas/signUp"

export const loginUser = async (data: LoginData) => {
    try {
        const response = await api.post("/login", data)
        const res = response.data

        return {
            success: true,
            token: res?.data.token,
            message: JSON.stringify(res?.message) || "Login feito com sucesso",
            user: res.data.user || "Dados do usuário não encotrados" // dados pessoais do user
        }
    } catch (error: any) {
        return {
            success: false,
            message: error.response.data?.error?.message || "Falha ao fazer login",
            token: undefined
        }
    }
}

export const createUser = async (data: SignUpData) => {
    const { confirmPassword, isStudent, firstName, lastName, ...payload } = data // Filtrando os campos que serão enviados à API 

    const patternData = { // Unir nome e sobrenome para API
        ...payload,
        name: `${firstName} ${lastName}`,
        accessType: "produtor"
    }

    try {
        const response = await api.post('/user', patternData) // Mandar dados para validação
        const res = response.data

        return {
            success: res.success,
            token: res?.data.token,
            message: JSON.stringify(res?.message) || "Usuário criado com sucesso",
            user: res.data.user // dados pessoais do user,
        }
    } catch (error: any) {
        return {
            success: error.res.success,
            message: JSON.stringify(error.res?.error) || "Erro inesperado ao registrar.",
        }
    }
}