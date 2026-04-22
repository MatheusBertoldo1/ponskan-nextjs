import Link from "next/link"

export const Hero = () => {
    return(
        <>
        <div id="#hero" className="flex flex-col h-172 items-center justify-center gap-6 select-none">
            <h1 className="max-w-200 text-center text-5xl font-bold text-slate-700">Gerenciamento <span className="text-amber-500">multiplataforma</span> e em <span className="text-amber-500">tempo real</span> de doenças no seu pomar</h1>
            <h2 className="max-w-175 text-center text-2xl font-semibold">Proteja sua safra, reduza em até 30% o uso de defensivos ao identificar o momento biológico exato para a aplicação.<span className="text-amber-500"> Menos desperdício, mais margem.</span></h2>
            <Link href="" className="flex items-center px-4 h-10 bg-amber-500 text-white text-base font-medium border rounded-full hover:bg-amber-500/80 transition-colors duration-200 ease-in-out">Quero meu pomar saudável</Link>
        </div>
        </>
    )
}