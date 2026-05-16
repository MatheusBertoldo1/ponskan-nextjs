'use server'

import { api } from "./api"

export const requestAllAnalysis = async (page : number) => {
    if(page < 1 || !page) return { message: "Página inválida"}

    try{
        const response = await api.get("analysis", {
            params: {
                page: page
            }
        })
        const res = response.data

        return {
            success: res?.success,
            message: res.message,
            data: res?.data || "Não foi encotrado dados"
        }
    } catch (error: any) {
        return {
            success: error.res?.success
        }
    }
}