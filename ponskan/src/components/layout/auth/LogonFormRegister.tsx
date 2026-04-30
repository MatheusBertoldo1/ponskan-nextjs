'use client'

import { LogoCurrentColor } from "@/assets/icons/LogoCurrentColor";
import { Button } from "@/components/ui/Button"
import { Input } from "@/components/ui/Imput";
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
    const { handleSubmit, trigger } = methods

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
            <div className="flex flex-col gap-4 font-lexend py-4">
                
                <Input {...register("firstName", {required: "Campo obrigatório"})} name="firstName" textLabel="Primeiro nome" error={errors.firstName?.message as string}/>
                <Input {...register("lastName", {required: "Campo obrigatório"})} name="lastName" textLabel="Sobrenome" error={errors.lastName?.message as string}/>
                
            </div>
        </>
    )
}
