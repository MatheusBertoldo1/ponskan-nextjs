'use client'

import { Button } from "@/components/ui/Button"
import { LogoCurrentColor } from "@/assets/icons/LogoCurrentColor";
import { InputText } from "@/components/ui/InputText";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginUser } from "@/services/loginUser";
import { saveSession } from "@/actions/session";
import { loginSchema, LoginData } from "@/schemas/login";
import Router from "next/router";

// Login
export default function Login() {
    const [isSubmiting, setIsSubmiting] = useState(false)

    const methods = useForm<LoginData>({
        mode: "onBlur",
        resolver: zodResolver(loginSchema)
    })

    const { handleSubmit, register, formState: { errors } } = methods

    const onSubmit = async (data: LoginData) => {
        setIsSubmiting(true)

        const response = await loginUser(data)

        if (response.success) {
            setIsSubmiting(false)

            await saveSession(response.token)
            
            Router.push('www.google.com')
        } else {
            alert(response.message)
        }
    }

    return (
        <div className="flex flex-col w-full max-w-200 font-lexend select-none">
            <div className="flex p-10 bg-slate-50 rounded-3xl">
                <div className="flex flex-1 flex-col">
                    <LogoCurrentColor className=" w-10 h-10 text-slate-600" />
                    <h1 className="mt-6 text-3xl font-bold text-slate-700">Fazer login</h1>
                    <p className="text-slate-500 mt-1">Acesse sua conta <span className="text-amber-500 font-semibold">Ponskan</span></p>
                </div>

                <div className="flex flex-1 flex-col">
                    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4 mt-8 ">
                        <AnimatePresence mode="wait">
                            <motion.div
                                initial={{ opacity: 0, x: 20 }} // Começa invisível e um pouco à direita
                                animate={{ opacity: 1, x: 0 }}  // Entra suavemente
                                exit={{ opacity: 0, x: -20 }}   // Sai para a esquerda
                                transition={{ duration: 0.3 }}
                            >
                                <InputText {...register("email")} inputId="email" textLabel="Email" visible error={errors.email?.message} />
                                <InputText {...register("password")} type="password" inputId="senha" textLabel="Senha" visible error={errors.password?.message} />
                            </motion.div>
                        </AnimatePresence>
                        <Button type="submit" className="self-end" variant={isSubmiting ? "disabled" : "primary"}>{isSubmiting ? "Acessando..." : "Acessar conta"}</Button>
                    </form>
                    <p className="text-center mt-6 text-sm text-slate-500">
                        Ainda não possui uma conta? <a href="/signup" className="text-amber-500 font-bold hover:underline">Crie agora.</a>
                    </p>
                </div>
            </div>

            <div className="flex justify-end gap-4 pt-4 pr-4 border-t border-slate-200 font-inter text-sm text-slate-500">
                <div className="flex flex-1 pl-4">
                    <Link href="/" className="hover:text-amber-400 transition-colors">Voltar</Link>
                </div>

                <a href="#" className="hover:text-amber-400 transition-colors">Privacidade</a>
                <a href="#" className="hover:text-amber-400 transition-colors">Termos</a>
                <a href="#" className="hover:text-amber-400 transition-colors">Cookies</a>
            </div>
        </div>
    )
}