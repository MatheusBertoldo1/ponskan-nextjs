'use server'
import { api } from "./api"

const UploapImagesForAnalysis = async (file: FormData) => {
    try {
        const response = await api.post("/analysis", file, {
            headers: {
                "Content-Type": "multipart/form-data",
            }
        })

        const res = response.data // encurtar o chamado
        return {
            success: res?.success as boolean,
            status: res?.status,
            message: res?.message as string,
            data: res?.data // createdAt, id, id_usuario, status, updatedAt
        }
    } catch(error: any) {
        return {
            success: false,
            message: JSON.stringify(error.response?.data?.message) || "Erro ao fazer upload",
            status: error.res?.status
        }
    }
}

export { UploapImagesForAnalysis }