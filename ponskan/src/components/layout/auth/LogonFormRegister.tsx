'use client'

import { LogoCurrentColor } from "@/assets/icons/LogoCurrentColor";
import { Button } from "@/components/ui/Button"
import { ProgressBar } from "@/components/ui/ProgressBar";
import { useState } from "react";
import { useForm, FormProvider, useFormContext } from "react-hook-form";

export const LogonFormRegister = () => {
    // Contador de etapas
    const maxRange = 6
    const [stage, setStage] = useState(1)

    // Definir titulo e nome dos inputs de cada estágio do formulário
    const PropsStageForm = (stage: number) => {
        let currentStage = stage - 1

        const propsStage = [
            {
                titleStage: "Insira seu nome",
                inputName: ["firstName", "lastName"]
            },
            {
                titleStage: "Data de nascimento",
                inputName: ["birthDate"]
            },
            {
                titleStage: "Localização e contato",
                inputName: ["locale", "number"]
            },
            {
                titleStage: "Dados empresariais",
                inputName: ["cnpj"]
            },
            {
                titleStage: "Estudante",
                inputName: ["scholl", "course"]
            },
            {
                titleStage: "Defina sua senha",
                inputName: ["password", "confirmPassord"]
            },
        ]

        return propsStage[currentStage]
    }

    // Validar os nomes dos inputs passados pelo PropsStageForm
    const ValidateStageForm = async () => {
        let imputsForm = PropsStageForm(stage).inputName

        if (!imputsForm) return false

        const IsValid = await trigger(imputsForm)

        return IsValid
    }

    // Incrementa valor no contador
    const increaseValue = async () => {
        let isValid = await ValidateStageForm()

        if (isValid) stage < maxRange ? setStage(stage + 1) : setStage(maxRange)
    }

    // Decrementa valor no contador
    const decreaseValue = () => {
        stage > 1 ? setStage(stage - 1) : setStage(1)
    }

    const showStage = (stage: number) => {
        switch (stage) {
            case 1: return <Stage1 />

        }
    }

    // atribuindo todos os metodos de useForm para methods (usado em FormProvides)
    const methods = useForm()

    // Extraindo métodos específicos do useForm
    const { handleSubmit, trigger, formState: { errors } } = methods

    // Método que roda ao dar submit
    const onSubmit = (data: any) => { console.log("Enviando dados:", data) }

    return (
        <div className="flex flex-1 p-10 bg-slate-50 rounded-3xl">
            <div className="flex flex-1 flex-col">
                <LogoCurrentColor className=" w-10 h-10 text-slate-600" />
                <h1 className="mt-6 text-3xl font-bold text-slate-700">Crie uma conta Ponskan</h1>
                <p className="text-slate-500 mt-1">{PropsStageForm(stage).titleStage}</p>
            </div>

            <div className="flex flex-1 flex-col gap-6">
                <FormProvider {...methods}>
                    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-1 flex-col gap-4">
                        <ProgressBar stage={stage} range={maxRange} />

                        {showStage(stage)}

                        <div className="flex flex-1 items-end w-full">
                            <Button type="button" onClick={decreaseValue} variant={stage > 1 ? "secondary" : "disabled"}>Voltar</Button>
                            <Button type="button" onClick={increaseValue} className="ml-auto" variant="primary">Avançar</Button>
                        </div>
                    </form>
                </FormProvider>
            </div>
        </div>
    )
}

const Stage1 = () => {
    const { register, formState: { errors } } = useFormContext()

    return (
        <>
            <div className="flex flex-col gap-4 font-lexend">
                <label className="text-sm text-slate-500">Primeiro Nome</label>

                <input
                    {...register("firstName", { required: "Necessário preencher o campo" })}

                    className="text-sm border px-2 h-12 rounded-lg border-slate-300 hover:border-amber-400 focus:border-amber-500 outline-none transition-colors"
                />
                {errors.firstName?.message && (
                    <label className="text-xs text-right w-full text-red-400">
                        Campo obrigatório
                    </label>
                )}

                <label className="text-sm text-slate-500">Sobrenome</label>

                <input
                    {...register("lastName", { required: "Necessário preencher o campo" })}

                    className="text-sm border px-2 h-12 rounded-lg border-slate-300 hover:border-amber-400 focus:border-amber-500 outline-none transition-colors"
                />
                {errors.lastName?.message && (
                    <label className="text-xs text-right w-full text-red-400">
                        Campo obrigatório
                    </label>
                )}
            </div>
        </>
    )
}
