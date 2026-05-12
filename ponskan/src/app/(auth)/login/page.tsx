'use client'

import { Button } from "@/components/ui/Button"
import Link from "next/link";
import { useForm } from "react-hook-form";
import { ControllerRenderProps } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod";
import { loginUser } from "@/services/loginUser";
import { saveSession } from "@/actions/session";
import { loginSchema, LoginData } from "@/schemas/login";
import { useRouter } from "next/navigation";
import { Card,CardContent, CardDescription, CardHeader, CardTitle, } from "@/components/ui/card"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"

export default function Login() {
    const router = useRouter()

    const form = useForm<LoginData>({
        mode: "onBlur",
        resolver: zodResolver(loginSchema),
        defaultValues: {
            email: "",
            password: ""
        }
    })

    const { handleSubmit, formState: { isSubmitting } } = form

    const onSubmit = async (data: LoginData) => {
        const response = await loginUser(data)

        if (response.success) {
            await saveSession(response.token)
            router.push('/dashboard')
        } else {
            alert(response.message)
        }
    }

    return (
        <div className="flex items-center justify-center min-h-screen w-full p-4">
            <Card className="w-full max-w-100">
                <CardHeader>
                    <CardTitle className="font-semibold text-2xl">Fazer login</CardTitle>
                    <CardDescription>
                        Acesse a plataforma Ponskan
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <Form {...form}>
                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                            <FormField
                                control={form.control}
                                name="email"
                                render={({ field }: { field: ControllerRenderProps<LoginData, "email"> }) => (
                                    <FormItem>
                                        <FormLabel>Email</FormLabel>
                                        <FormControl>
                                            {/* O 'field' aqui já contém value, onChange, onBlur e ref */}
                                            <Input 
                                                placeholder="seu@email.com" 
                                                {...field} 
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="password"
                                render={({ field } : { field: ControllerRenderProps<LoginData, "password"> }) => (
                                    <FormItem>
                                        <FormLabel>Senha</FormLabel>
                                        <FormControl>
                                            <Input type="password" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <div className="flex flex-col gap-4">
                                <Button 
                                    type="submit" 
                                    className="w-full bg-amber-500 hover:bg-amber-600" 
                                    disabled={isSubmitting}
                                >
                                    {isSubmitting ? "Acessando..." : "Entrar"}
                                </Button>

                                <div className="text-center text-sm text-muted-foreground space-y-2">
                                    <p>
                                        Ainda não tem conta?{" "}
                                        <Link href="/signup" className="text-amber-600 font-bold hover:underline">
                                            Cadastre-se
                                        </Link>
                                    </p>
                                    <Link href="/" className="block w-full text-left hover:underline">
                                        Voltar
                                    </Link>
                                </div>
                            </div>
                        </form>
                    </Form>
                </CardContent>
            </Card>
        </div>
    )
}