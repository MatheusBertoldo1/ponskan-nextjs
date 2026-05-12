'use client'

import { LogoCurrentColor } from "@/assets/icons/LogoCurrentColor"
import { Button } from "@/components/ui/Button"
import { Input } from "@/components/ui/input"
import { ProgressBar } from "@/components/ui/ProgressBar"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage, } from "@/components/ui/form"
import { Card } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { DateMask, PhoneMask } from "@/utils/masks"
import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { signUpSchema, SignUpData } from "@/schemas/signUp"
import { registerUser } from "@/services/registerUser"
import { saveSession } from "@/actions/session"
import { useRouter } from "next/navigation"

type Step = {
    title: string,
    fields: (keyof SignUpData)[]
}

const FORM_STEPS: Step[] = [
    { title: "Insira seu nome", fields: ["firstName", "lastName"] },
    { title: "Data de nascimento", fields: ["email", "phone"] },
    { title: "Localização e contato", fields: ["address", "birthDate"] },
    { title: "Dados empresariais", fields: ["cnpj"] },
    { title: "Você é um estudante?", fields: ["highSchool", "course"] },
    { title: "Defina sua senha", fields: ["password", "confirmPassword"] },
]

const maxRange = FORM_STEPS.length - 1

export const SignupForm = () => {
    const router = useRouter()
    const [stage, setStage] = useState(0)

    const form = useForm<SignUpData>({
        shouldUnregister: false,
        resolver: zodResolver(signUpSchema),
        mode: "onBlur",
        defaultValues: {
            firstName: "", lastName: "", email: "", phone: "",
            address: "", birthDate: "", cnpj: "",
            isStudent: false, highSchool: "", course: "",
            password: "", confirmPassword: ""
        }
    })

    const { handleSubmit, trigger, watch, setValue, clearErrors, formState: { isSubmitting } } = form
    const isStudent = watch("isStudent")

    useEffect(() => {
        if (!isStudent) {
            setValue("highSchool", "")
            setValue("course", "")
            clearErrors(["highSchool", "course"])
        }
    }, [isStudent, setValue, clearErrors]);

    const increaseValue = async () => {
        const fields = FORM_STEPS[stage].fields
        const isValid = await trigger(fields)
        if (isValid) setStage((prev) => Math.min(prev + 1, maxRange))
    }

    const decreaseValue = () => {
        setStage((prev) => Math.max(prev - 1, 0))
    }

    const onSubmit = async (data: SignUpData) => {
        const response = await registerUser(data)
        if (response.success) {
            await saveSession(response.token)
            router.push('/dashboard')
        }
    }

    return (
        <div className="flex flex-1 p-10 bg-slate-50 rounded-3xl min-h-40">
            <div className="flex flex-1 flex-col">
                <LogoCurrentColor className="w-10 h-10 text-slate-600" />
                <h1 className="mt-6 text-3xl font-bold text-slate-700">Crie uma conta Ponskan</h1>
                <p className="text-slate-500 mt-1">{FORM_STEPS[stage].title}</p>
            </div>

            <Card className="flex flex-1">
                <Form {...form}>
                    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-1 flex-col gap-4">
                        <ProgressBar stage={stage + 1} range={maxRange + 1} />

                        <div className="flex flex-col gap-4 py-4 min-h-30">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={stage}
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    transition={{ duration: 0.3 }}
                                    className="space-y-4"
                                >
                                    {/* STAGE 0: Nome */}
                                    {stage === 0 && (
                                        <>
                                            <FormField control={form.control} name="firstName" render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel>Primeiro nome</FormLabel>
                                                    <FormControl><Input {...field} /></FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )} />
                                            <FormField control={form.control} name="lastName" render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel>Sobrenome</FormLabel>
                                                    <FormControl><Input {...field} /></FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )} />
                                        </>
                                    )}

                                    {/* STAGE 1: Contato */}
                                    {stage === 1 && (
                                        <>
                                            <FormField control={form.control} name="email" render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel>Email</FormLabel>
                                                    <FormControl><Input {...field} /></FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )} />
                                            <FormField control={form.control} name="phone" render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel>Telefone</FormLabel>
                                                    <FormControl>
                                                        <Input {...field} onChange={(e) => {
                                                            e.target.value = PhoneMask(e.target.value)
                                                            field.onChange(e)
                                                        }} />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )} />
                                        </>
                                    )}

                                    {/* STAGE 2: Localização */}
                                    {stage === 2 && (
                                        <>
                                            <FormField control={form.control} name="address" render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel>Endereço</FormLabel>
                                                    <FormControl><Input {...field} /></FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )} />
                                            <FormField control={form.control} name="birthDate" render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel>Data de nascimento</FormLabel>
                                                    <FormControl>
                                                        <Input {...field} onChange={(e) => {
                                                            e.target.value = DateMask(e.target.value)
                                                            field.onChange(e)
                                                        }} />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )} />
                                        </>
                                    )}

                                    {/* STAGE 3: CNPJ */}
                                    {stage === 3 && (
                                        <FormField control={form.control} name="cnpj" render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>CNPJ (opcional)</FormLabel>
                                                <FormControl><Input {...field} /></FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )} />
                                    )}

                                    {/* STAGE 4: Estudante */}
                                    {stage === 4 && (
                                        <div className="space-y-4">
                                            <FormField control={form.control} name="isStudent" render={({ field }) => (
                                                <FormItem className="flex flex-row items-start space-x-3 space-y-0 p-4 border rounded-md">
                                                    <FormControl>
                                                        <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                                                    </FormControl>
                                                    <div className="space-y-1 leading-none">
                                                        <FormLabel>Sou um estudante</FormLabel>
                                                    </div>
                                                </FormItem>
                                            )} />
                                            {isStudent && (
                                                <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} className="space-y-4">
                                                    <FormField control={form.control} name="highSchool" render={({ field }) => (
                                                        <FormItem>
                                                            <FormLabel>Instituição</FormLabel>
                                                            <FormControl><Input {...field} /></FormControl>
                                                            <FormMessage />
                                                        </FormItem>
                                                    )} />
                                                    <FormField control={form.control} name="course" render={({ field }) => (
                                                        <FormItem>
                                                            <FormLabel>Curso</FormLabel>
                                                            <FormControl><Input {...field} /></FormControl>
                                                            <FormMessage />
                                                        </FormItem>
                                                    )} />
                                                </motion.div>
                                            )}
                                        </div>
                                    )}

                                    {/* STAGE 5: Senha */}
                                    {stage === 5 && (
                                        <>
                                            <FormField control={form.control} name="password" render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel>Senha</FormLabel>
                                                    <FormControl><Input type="password" {...field} /></FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )} />
                                            <FormField control={form.control} name="confirmPassword" render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel>Confirmar senha</FormLabel>
                                                    <FormControl><Input type="password" {...field} /></FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )} />
                                        </>
                                    )}
                                </motion.div>
                            </AnimatePresence>
                        </div>

                        <div className="flex items-center justify-between mt-auto">
                            <Button type="button" onClick={decreaseValue} variant={stage > 0 ? "secondary" : "ghost"} disabled={stage === 0}>
                                Voltar
                            </Button>

                            {stage === maxRange ? (
                                <Button type="submit" disabled={isSubmitting} className="bg-amber-500 hover:bg-amber-600">
                                    {isSubmitting ? "Enviando..." : "Criar conta"}
                                </Button>
                            ) : (
                                <Button type="button" onClick={increaseValue} className="bg-amber-500 hover:bg-amber-600">
                                    Avançar
                                </Button>
                            )}
                        </div>
                    </form>
                </Form>
            </Card>
        </div>
    )
}