'use server'

import { api } from "./api"

const UploapImagesForAnalysis = async (file: FormData) => {
    try {
        const response = await api.post("/analysis", file, {
            headers: {
                "Content-Type": "multipart/form-data",
            }
        })

        console.log(response)
        return {
            success: true,
            message: JSON.stringify(response.data?.message),
            status: JSON.stringify(response.data?.status)
        }
    } catch(error: any) {
        return {
            success: false,
            message: JSON.stringify(error.response?.data?.message) || "Erro ao fazer upload",
            status: error.response?.data?.status
        }
    }
}

export { UploapImagesForAnalysis }