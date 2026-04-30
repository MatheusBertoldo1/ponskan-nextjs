import { LogonFormRegister } from "@/components/layout/auth/LogonFormRegister"

export default function Logon() {
    

    return (
        <div className="flex flex-col min-h-[50%] w-full max-w-200 font-lexend ">
            {/* Formulário */}
            <LogonFormRegister />

            {/* Termos   */}
            <div className="flex justify-end gap-4 pt-4 pr-4 font-inter text-sm text-slate-500">
                <a href="#" className="hover:text-amber-400 transition-colors">Privacidade</a>
                <a href="#" className="hover:text-amber-400 transition-colors">Termos de uso</a>
                <a href="#" className="hover:text-amber-400 transition-colors">Cookies</a>
            </div>
        </div>
    )
}

/*
primeiro nome 
sobrenome
-------------
data de nascimento
-------------
endereço
telefone
-------------
CNPJ (opcional)
-------------
isStundent?
escola
curso
-------------
senha
repetir senha
*/