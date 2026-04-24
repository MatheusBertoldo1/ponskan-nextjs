import Link from "next/link"

export const CTA = () => {
    return (
        <>
        <section className="flex flex-col w-full h-125 items-center justify-center gap-8 bg-amber-500">
            <h3 className="w-175 text-center text-4xl font-semibold text-amber-900">Não deixe sua safra se desvalorizar</h3>
            <p className="w-125 text-center text-base text-white">Aumente sua área de atuação sem perder o controle, utilizando processos automatizados que crescem com seu negócio.</p>
            <Link href="" className="px-4 py-2 rounded-full bg-amber-50 text-base font-medium text-amber-500 hover:bg-amber-100 transition-colors">Quero minha safra produzindo</Link>
        </section>
        </>
    )
}