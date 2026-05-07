import { api } from "./api"
import { SignUpData } from "@/schemas/auth"

export const registerUser = async (data: SignUpData) => {
    const { confirmPassword, isStudent, ...payload } = data // Filtrando os campos que serão enviados à API 

    try {
        const response = await api.post('/users/register', payload)

        return {
            success: true,
            token: response.data.token,
            message: response.data?.message || "Usuário criado com sucesso"
        }
    } catch (error: any) {
        return {
            success: false,
            message: error.response?.data?.error || "Erro inesperado ao registrar.",
        }
    }
}