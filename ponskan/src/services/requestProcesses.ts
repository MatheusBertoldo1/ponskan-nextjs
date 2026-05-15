'use server'

import { api } from "./api";

export const requestPooling = async (id: string) => {
  if (!id) return { success: false }

  try {
    const response = await api.get(`/analysis/${id}`)
    return {
      success: response.data?.success,
      response: response.data || "Sem dados"
    }
  } catch (error : any) {
    return {
      success: error.response.data?.success,
      response: error.response.data?.message || "Erro ao tentar fazer verificação das imagens" 
    }
  }
}