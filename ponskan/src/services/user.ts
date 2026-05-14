'use server'

import { api } from "./api";
import { LoginData } from "@/schemas/login";
import { SignUpData } from "@/schemas/signUp"

export const loginUser = async (data: LoginData) => {
    try {
        const response = await api.post("/login", data)

        return {
            success: true,
            token: response.data?.data.token,
            message: response.data?.message || "Login feito com sucesso"
        }
    } catch (error: any) {
        return {
            success: false,
            message: JSON.stringify(error.response?.data?.error) || "Falha ao fazer login",
            token: undefined
        }
    }
}

export const createUser = async (data: SignUpData) => {
    const { confirmPassword, isStudent, firstName, lastName, ...payload } = data // Filtrando os campos que serão enviados à API 

    const patternData = {
        ...payload,
        name: `${firstName} ${lastName}`,
        accessType: "produtor"
    }

    try {
        const response = await api.post('/user', patternData)

        return {
            success: true,
            token: response.data?.data.token,
            message: JSON.stringify(response.data?.message) || "Usuário criado com sucesso"
        }
    } catch (error: any) {
        return {
            success: false,
            message: JSON.stringify(error.response?.data?.error) || "Erro inesperado ao registrar.",
        }
    }
}