'use client'

import { LogoCurrentColor } from "@/assets/icons/LogoCurrentColor";
import { Button } from "@/components/ui/Button"
import { ProgressBar } from "@/components/ui/ProgressBar";
import { useState } from "react";
import { useForm, FormProvider } from "react-hook-form";

export default function Logon() {
    // Contador de etapas
    const maxRange = 12
    const [stage, setStage] = useState(1)

    // Incrementa valor no contador
    const increaseValue = async () => {
        const FormImputsIsValid = await trigger("name")

        if (FormImputsIsValid) stage < maxRange ? setStage(stage + 1) : setStage(maxRange)
    }

    // Decrementa valor no contador
    const decreaseValue = () => {
        stage > 1 ? setStage(stage - 1) : setStage(1)
    }

    // Textos descrição do estágio
    const descriptionStage = [
        "Insira seu nome",
    ]

    // Método de ativar a validação do campo input
    const { register, handleSubmit, trigger, formState: { errors } } = useForm()

    // Método que roda ao dar submit
    const onSubmit = (data: any) => { console.log("Enviando dados:", data) }



    return (
        <div className="flex flex-col w-full max-w-200 font-lexend ">
            {/* Formulário */}
            <div className="flex p-10 bg-slate-50 rounded-3xl">
                <div className="flex flex-1 flex-col">
                    <LogoCurrentColor className=" w-10 h-10 text-slate-600" />
                    <h1 className="mt-6 text-3xl font-bold text-slate-700">Crie uma conta Ponskan</h1>
                    <p className="text-slate-500 mt-1">{descriptionStage[stage - 1]}</p>
                </div>

                <div className="flex flex-1 flex-col gap-6">
                    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
                        <ProgressBar stage={stage} range={maxRange} />

                        <input {...register("name", { required: { value: true, message: "Requerido!" }, minLength: { value: 4, message: "Min value 4" } })} placeholder="Seu nome" />
                        {errors.name?.message && (
                            <span className="text-red-500 text-sm animate-in fade-in">
                                {errors.name?.message as string}
                            </span>
                        )}
                        <div className="flex w-full">
                            <Button type="button" onClick={decreaseValue} variant={stage > 1 ? "secondary" : "disabled"}>Voltar</Button>
                            <Button type="button" onClick={increaseValue} className="ml-auto" variant="primary">Avançar</Button>
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

