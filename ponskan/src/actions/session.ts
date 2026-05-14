'use server'

import { cookies } from "next/headers"

export const saveSession = async (token: string) => {
  if(!token || token === "undefined" || token === "null") return // Verifica se o token passado é válido
  
  const cookieStore = await cookies()
  const fullToken = `Bearer ${token}`

  try{
    cookieStore.set('tokenPonskan', fullToken, {
      path: '/', // Todas as páginas do site o navegador tem permissão para enviar cookie
      httpOnly: true, // Impede que o JavaScript do cliente acesse o token (proteção XSS)
      secure: false, // process.env.NODE_ENV === 'production', // Só envia via HTTPS em produção
      sameSite: 'strict',
      maxAge: 60 * 60 * 24 * 1, // Tempo de vida 1 dia
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