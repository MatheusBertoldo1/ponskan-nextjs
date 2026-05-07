import { api } from "./api";
import { LoginData } from "@/schemas/login";

export const loginUser = async (data: LoginData) => {

    try {
        const response = await api.post("/login", data)

        return {
            success: true,
            token: response.data.token,
            message: response.data?.message || "Login feito com sucesso"
        }
    } catch (error: any) {
        return {
            success: false,
            message: error.response?.data?.error || "Falha ao fazer login",
            token: undefined
        }
    }
}