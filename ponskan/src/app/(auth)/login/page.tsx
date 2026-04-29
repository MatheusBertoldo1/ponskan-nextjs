import { Button } from "@/components/ui/Button"
import { LogoCurrentColor } from "@/assets/icons/LogoCurrentColor";

export default function Login() {
    return (
        <div className="flex flex-col w-full max-w-200 font-lexend ">
            <div className="flex p-10 bg-slate-50 rounded-3xl">
                <div className="flex flex-1 flex-col">
                    <LogoCurrentColor className=" w-10 h-10 text-slate-600" />
                    <h1 className="mt-6 text-3xl font-bold text-slate-700">Fazer login</h1>
                    <p className="text-slate-500 mt-1">Acesse sua conta <span className="text-amber-500 font-semibold">Ponskan</span></p>
                </div>

                <div className="flex flex-1 flex-col">
                    <form method="get" action="google.com" className="flex flex-col gap-4 mt-8 ">
                        <div>
                            <label className="text-sm font-medium text-slate-600 ml-1">Email</label>
                            <input type="email" className="w-full mt-1 px-4 py-3 bg-slate-50 border border-slate-300 rounded-lg outline-none focus:border-amber-400 transition-all" />
                        </div>
                        <div>
                            <label className="text-sm font-medium text-slate-600 ml-1">Senha</label>
                            <input type="password" className="w-full mt-1 px-4 py-3 bg-slate-50 border border-slate-300 rounded-lg outline-none focus:border-amber-400 transition-all" />
                        </div>
                        <Button className="self-end" variant="primary">Acessar conta</Button>
                    </form>
                    <p className="text-center mt-6 text-sm text-slate-500">
                        Ainda não possui uma conta? <a href="/logon" className="text-amber-500 font-bold hover:underline">Crie agora.</a>
                    </p>
                </div>
            </div>
                
            <div className="flex justify-end gap-4 pt-4 pr-4 border-t border-slate-200 font-inter text-sm text-slate-500">
                <a href="#" className="hover:text-amber-400 transition-colors">Privacidade</a>
                <a href="#" className="hover:text-amber-400 transition-colors">Termos</a>
                <a href="#" className="hover:text-amber-400 transition-colors">Cookies</a>
            </div>
        </div>
    )
}