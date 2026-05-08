import { api } from "./api"
import { SignUpData } from "@/schemas/signUp"

export const registerUser = async (data: SignUpData) => {
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