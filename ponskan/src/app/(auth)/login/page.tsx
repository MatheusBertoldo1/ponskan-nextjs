import { Button } from "@/components/ui/Button"

export default function Login() {
    return (
        <div className="p-10">
            <h1 className="text-3xl font-bold text-slate-700">Fazer login</h1>
            <p className="text-slate-500 mt-1">Acesse sua conta <span className="text-amber-500 font-semibold">Ponskan</span></p>

            <form method="get" action="google.com" className="flex flex-col gap-4 mt-8 ">
                <div>
                    <label className="text-sm font-medium text-slate-600 ml-1">Email</label>
                    <input type="email" className="w-full mt-1 px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg outline-none focus:border-amber-400 transition-all" />
                </div>

                <div>
                    <label className="text-sm font-medium text-slate-600 ml-1">Senha</label>
                    <input type="password" className="w-full mt-1 px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg outline-none focus:border-amber-400 transition-all" />
                </div>

                <Button className="self-end" variant="primary">Acessar conta</Button>
            </form>

            <p className="text-center mt-6 text-sm text-slate-500">
                Ainda não possui uma conta? <a href="#" className="text-amber-500 font-bold hover:underline">Crie agora.</a>
            </p>

            <div className="flex justify-center gap-4 mt-12 pt-6 border-t border-slate-200 font-inter text-sm text-slate-500">
                <a href="#" className="hover:text-amber-400 transition-colors">Privacidade</a>
                <a href="#" className="hover:text-amber-400 transition-colors">Termos</a>
                <a href="#" className="hover:text-amber-400 transition-colors">Cookies</a>
            </div>
        </div>
    )
}