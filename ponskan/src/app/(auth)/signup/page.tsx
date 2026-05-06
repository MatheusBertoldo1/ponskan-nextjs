import { SignupForm } from "@/components/layout/auth/SignupForm"
import Link from "next/link"

export default function Logon() {


    return (
        <div className="flex flex-col min-h-115 h-fit w-full max-w-200 font-lexend select-none">
            {/* Formulário */}
            <SignupForm />

            {/* Termos   */}
            <div className="flex justify-end gap-4 pt-4 pr-4 font-inter text-sm text-slate-500">
                <div className="flex flex-1 pl-4">
                    <Link href="/login" className="hover:text-amber-400 transition-colors">Entrar em uma conta</Link>
                </div>

                <a href="#" className="hover:text-amber-400 transition-colors">Privacidade</a>
                <a href="#" className="hover:text-amber-400 transition-colors">Termos de uso</a>
                <a href="#" className="hover:text-amber-400 transition-colors">Cookies</a>
            </div>
        </div>
    )
}

