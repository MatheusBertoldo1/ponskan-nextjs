import Link from "next/link"
import { Form } from "@/assets/icons/Form"

export const Hero = () => {
    return(
        <>
        <section id="hero" className="flex flex-col h-172 items-center justify-center gap-6 select-none">
            <h1 className="max-w-200 text-center text-6xl font-bold text-slate-700 leading-16">Gerenciamento <span className="text-amber-500 relative">multiplataforma<Form className="absolute -bottom-6 -z-1 left-0 w-full text-amber-500/35"/></span> de doenças no seu pomar</h1>
            <h2 className="max-w-175 text-center text-2xl text-slate-500 font-normal">Proteja sua safra, reduza em até 30% o uso de defensivos ao identificar o momento biológico exato para a aplicação.<span className="text-amber-500"> Menos desperdício, mais margem.</span></h2>
            <Link href="" className="flex items-center px-4 h-10 bg-amber-500 text-white text-base font-medium border rounded-full hover:bg-amber-500/80 transition-colors duration-200 ease-in-out">Quero meu pomar saudável</Link>
        </section>
        </>
    )
}