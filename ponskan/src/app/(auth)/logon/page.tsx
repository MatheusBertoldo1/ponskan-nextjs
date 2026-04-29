'use client'

import { LogoCurrentColor } from "@/assets/icons/LogoCurrentColor";
import { Button } from "@/components/ui/Button"
import { useState } from "react";

export default function Logon() {
    const maxStage = 5
    const [stage, setStage] = useState(0)

    return (
        <div className="flex flex-col w-full max-w-200 font-lexend ">
            {/* Formulário */}
            <div className="flex p-10 bg-slate-50 rounded-3xl">
                <div className="flex flex-1 flex-col">
                    <LogoCurrentColor className=" w-10 h-10 text-slate-600" />
                    <h1 className="mt-6 text-3xl font-bold text-slate-700">Crie uma conta Ponskan</h1>
                    <p className="text-slate-500 mt-1">Acesse sua conta <span className="text-amber-500 font-semibold">Ponskan</span></p>
                </div>

                <div className="flex flex-1 flex-col gap-6">
                    

                    <form method="get" action="google.com" className="flex flex-col gap-4">
                        <div>
                            <label className="text-sm font-medium text-slate-600 ml-1">Email</label>
                            <input type="email" className="w-full mt-1 px-4 py-3 bg-slate-50 border border-slate-300 rounded-lg outline-none focus:border-amber-400 transition-all" />
                        </div>

                        <div>
                            <label className="text-sm font-medium text-slate-600 ml-1">Senha</label>
                            <input type="password" className="w-full mt-1 px-4 py-3 bg-slate-50 border border-slate-300 rounded-lg outline-none focus:border-amber-400 transition-all" />
                        </div>

                        <div className="flex w-full">
                            <Button type="button" onClick={() => setStage(stage - 1)} variant="secondary">Voltar</Button>
                            <Button type="button" onClick={() => setStage(stage + 1)} className="ml-auto" variant="primary">Avançar</Button>
                        </div>
                    </form>
                </div>
            </div>

            {/* Termos   */}
            <div className="flex justify-end gap-4 pt-4 pr-4 border-t border-slate-200 font-inter text-sm text-slate-500">
                <a href="#" className="hover:text-amber-400 transition-colors">Privacidade</a>
                <a href="#" className="hover:text-amber-400 transition-colors">Termos de uso</a>
                <a href="#" className="hover:text-amber-400 transition-colors">Cookies</a>
            </div>
        </div>
    )
}