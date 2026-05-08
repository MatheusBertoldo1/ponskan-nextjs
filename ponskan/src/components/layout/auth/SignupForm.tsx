'use client'

import { LogoCurrentColor } from "@/assets/icons/LogoCurrentColor"
import { Button } from "@/components/ui/Button"
import { InputText } from "@/components/ui/InputText"
import { ProgressBar } from "@/components/ui/ProgressBar"
import { DateMask, PhoneMask } from "@/utils/masks"
import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect } from "react"
import { useForm, FormProvider } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { signUpSchema, SignUpData } from "@/schemas/signUp"
import { registerUser } from "@/services/registerUser"
import { saveSession } from "@/actions/session"
import { useRouter } from "next/navigation"

type Step = { // Definir o formato os dados do formulário
    title: string,
    fields: (keyof SignUpData)[]
}

// Definir titulo e nome dos InputTexts de cada estágio do formulário
const FORM_STEPS: Step[] = [
    {
        title: "Insira seu nome",
        fields: ["firstName", "lastName"],
    },
    {
        title: "Data de nascimento",
        fields: ["email", "phone"],
    },
    {
        title: "Localização e contato",
        fields: ["address", "birthDate"],
    },
    {
        title: "Dados empresariais",
        fields: ["cnpj"],
    },
    {
        title: "Você é um estudante?",
        fields: ["highSchool", "course"],
    },
    {
        title: "Defina sua senha",
        fields: ["password", "confirmPassword"],
    },
]

// Define quantidade de passos
const maxRange = FORM_STEPS.length - 1

// --------- Formulário de registro multi-etapas  --------------
export const SignupForm = () => {
    const Router = useRouter()
    const [stage, setStage] = useState(0) // Contador de etapas
    const [isSubmiting, setIsSubmiting] = useState(false) // Estado de validação doformulário

    // atribuindo todos os metodos de useForm para methods (usado em FormProvides) 
    const methods = useForm<SignUpData>(
        {
            shouldUnregister: false, // Persistir dados ao desmontar componente
            resolver: zodResolver(signUpSchema), // Aplica as regras definidas no schema
            mode: "onBlur"
        }
    )

    const { handleSubmit, trigger, register, watch, setValue, clearErrors, formState: { errors, touchedFields } } = methods  // Extraindo métodos específicos do useForm

    const isStudent = watch("isStudent") // Acompanha checkbox isStudent

    // Apaga os valores no estado do formulário
    useEffect(() => {
        if (!isStudent) {
            setValue("highSchool", "")
            setValue("course", "")
            clearErrors(["highSchool", "course", "password", "confirmPassword"])
        }
    }, [isStudent, setValue, clearErrors]);

    // Incrementa valor no contador
    const increaseValue = async () => {
        let inputTextsForm = FORM_STEPS[stage].fields // Guardar os campos do estágio atual

        if (!inputTextsForm) return false // Verificação se os campos existem

        let isValid = await trigger(inputTextsForm) // Validação dos campos e retornando true/false 

        if (isValid) stage < maxRange ? setStage(stage + 1) : setStage(maxRange)
    }

    // Decrementa valor no contador
    const decreaseValue = () => {
        stage > 0 ? setStage(stage - 1) : setStage(0)
    }

    // Método OnKeyDown('enter')
    const OnKeyDown = (e: React.KeyboardEvent<HTMLFormElement>) => {
        if (e.key === 'Enter') {
            e.preventDefault();

            // Tira o foco do input atual para forçar o RHF a registrar o valor
            if (document.activeElement instanceof HTMLElement) document.activeElement.blur()

            // Espera um "frame" para o React processar o blur e chama a função
            requestAnimationFrame(() => {
                if (stage < maxRange) increaseValue()
            })
        }
    }

    // Submeter à API
    const onSubmit = async (data: SignUpData) => {
        setIsSubmiting(true)

        const response = await registerUser(data)

        if (response.success) {
            setIsSubmiting(false)

            await saveSession(response.token) // Salvar o token

            Router.push('/dashboard')
        } else {
            //console.log(response.message)
            setIsSubmiting(false)
        }
    }

    return (
        <div className="flex flex-1 p-10 bg-slate-50 rounded-3xl">
            <div className="flex flex-1 flex-col">
                <LogoCurrentColor className=" w-10 h-10 text-slate-600" />
                <h1 className="mt-6 text-3xl font-bold text-slate-700">Crie uma conta Ponskan</h1>
                <p className="text-slate-500 mt-1">{FORM_STEPS[stage].title}</p>
            </div>

            <div className="flex flex-1 flex-col gap-6">
                <FormProvider {...methods}>
                    <form onSubmit={handleSubmit(onSubmit)} onKeyDown={OnKeyDown} className="flex flex-1 flex-col gap-4">

                        <ProgressBar stage={stage + 1} range={maxRange + 1} />

                        <div className="flex flex-col gap-4 font-lexend py-4">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={stage}
                                    initial={{ opacity: 0, x: 20 }} // Começa invisível e um pouco à direita
                                    animate={{ opacity: 1, x: 0 }}  // Entra suavemente
                                    exit={{ opacity: 0, x: -20 }}   // Sai para a esquerda
                                    transition={{ duration: 0.3 }}
                                >
                                    {/* STAGE 0 */}
                                    <InputText {...register("firstName")} visible={stage === 0} inputId="firstName" textLabel="Primeiro nome" error={errors.firstName?.message} />
                                    <InputText {...register("lastName")} visible={stage === 0} inputId="lastName" textLabel="Sobrenome" error={errors.lastName?.message} />

                                    {/* STAGE 1 */}
                                    <InputText {...register("email")} visible={stage === 1} inputId="email" textLabel="Email" error={errors.email?.message} />
                                    <InputText {...register("phone")} visible={stage === 1} inputId="phone" textLabel="Telefone" error={errors.phone?.message}
                                        onChange={
                                            (e) => {
                                                const { value } = e.target
                                                e.target.value = PhoneMask(value)
                                            }
                                        }
                                    />

                                    {/* STAGE 2 */}
                                    <InputText {...register("address")} visible={stage === 2} inputId="address" textLabel="Endereço" error={errors.address?.message} />
                                    <InputText {...register("birthDate")} visible={stage === 2} inputId="birthDate" textLabel="Data de nascimento" error={errors.birthDate?.message}
                                        onChange={
                                            (e) => {
                                                const { value } = e.target;
                                                e.target.value = DateMask(value);
                                            }
                                        }
                                    />

                                    {/* STAGE 3 */}
                                    <InputText {...register("cnpj")} visible={stage === 3} inputId="cnpj" textLabel="CNPJ (opcional)" error={errors.cnpj?.message} defaultValue={""} />

                                    {/* STAGE 4 */}
                                    <div className={`flex flex-col w-full gap-3 ${stage !== 4 && "hidden"}`}>
                                        <div className="flex gap-3">
                                            <input type="checkbox" {...register("isStudent")} id="isStudent" className="cursor-pointer" />
                                            <label htmlFor="isStudent" className="text-sm text-slate-600 cursor-pointer">Sou um estudante</label>
                                        </div>

                                        <div style={{ maxHeight: isStudent ? '300px' : '0px', opacity: isStudent ? '1' : '0' }} className={`flex pt-2 flex-col overflow-hidden transition-all duration-300`}>
                                            <InputText {...register("highSchool")} visible={stage === 4} inputId="highSchool" textLabel="Nome da instituição" error={errors.highSchool?.message} />
                                            <InputText {...register("course")} visible={stage === 4} inputId="course" textLabel="Nome do curso" error={errors.course?.message} />
                                        </div>
                                    </div>

                                    {/* STAGE 5 */}
                                    <div className="flex flex-col flex-1">
                                        <InputText {...register("password")} visible={stage === 5} type="password" inputId="password" textLabel="Senha" error={stage === 5 && touchedFields.password ? errors.password?.message : undefined} />
                                        <InputText {...register("confirmPassword")} visible={stage === 5} type="password" inputId="confirmPassword" textLabel="Confirmar senha" error={stage === 5 && touchedFields.password ? errors.confirmPassword?.message : undefined} />
                                    </div>
                                </motion.div>
                            </AnimatePresence>
                        </div>

                        <div className="flex flex-1 items-end w-full">
                            <Button type="button" onClick={decreaseValue} variant={stage > 0 ? "secondary" : "disabled"}>Voltar</Button>

                            {
                                stage == maxRange ?
                                    <Button type="submit" className="ml-auto" variant={isSubmiting ? "disabled" : "primary"}>{isSubmiting ? "Enviando" : "Criar conta"}</Button>
                                    :
                                    <Button type="button" onClick={increaseValue} className="ml-auto" variant="primary">Avançar</Button>
                            }
                        </div>
                    </form>
                </FormProvider>
            </div>
        </div>
    )
}
