'use server'

import { cookies } from "next/headers"
import { SignUpData } from "@/schemas/auth"

export const auth = async (data: SignUpData) => {
    const {confirmPassword, isStudent, ...payload} = data // Filtrando os campos que serão enviados à API 

    try{
        const response
    }
}