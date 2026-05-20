'use server'

import { api } from "./api"

type StatusAnalysis = "finalizada" | "pendente" | "cancelada" // Status da análise

interface AnalysisData { // Dados individuaids de cada análise
    id: string
    status: StatusAnalysis
    createdAt: string
    imagesCount: number
    classificacao: {
        id: string
        classe: string
        confianca: number
        tempo_execucao: number
        createdAt: string
    }
}

interface AnalysisFull { // Padrão de resposta da API
    success: boolean
    message: string
    data: AnalysisData[]
}

export const requestAllAnalysis = async (page: number) => {
    if (page < 1 || !page) return { message: "Página inválida" }

    try {
        const response = await api.get<AnalysisFull>("analysis", {
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