import { api } from "./api"

const UploapImagesForAnalysis = async (file: File[]) => {
    try {
        const response = await api.post("/analysis", file)

        return {
            success: true,
            message: response.data?.message,
            status: response.data?.status
        }
    } catch(error: any) {
        return {
            success: false,
            message: error.response?.data?.message || "Erro ao fazer upload",
            status: error.response?.data?.status || "500"
        }
    }
}

export { UploapImagesForAnalysis }