'use server'

import { cookies } from "next/headers"

export const saveSession = async (token: string) => {
  const cookieStore = await cookies()
  const fullToken = `Bearer ${token}`

  try{
    cookieStore.set('tokenPonskan', fullToken, {
      path: '/', // Todas as páginas do site o navegador tem permissão para enviar cookie
      httpOnly: true, // Impede que o JavaScript do cliente acesse o token (proteção XSS)
      secure: process.env.NODE_ENV === 'production', // Só envia via HTTPS em produção
      sameSite: 'strict',
      maxAge: 60 * 60 * 24 * 3, // Tempo de vida
    })

    return true
  } 
  catch(error) {
    console.log(error)
    return false
  }

}

export async function deleteSession() {
  const cookieStore = await cookies()
  cookieStore.delete('tokenPonskan') // Destruir cookie
}