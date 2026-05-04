import { LogonFormRegister } from "@/components/layout/auth/LogonFormRegister"

export default function Logon() {
    

    return (
        <div className="flex flex-col min-h-[60%] h-fit w-full max-w-200 font-lexend select-none">
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

