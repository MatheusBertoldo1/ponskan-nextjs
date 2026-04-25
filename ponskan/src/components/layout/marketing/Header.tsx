import { Logo } from "@/assets/icons/Logo"
import Link from "next/link"

export const Header = () => {
    return (
        <>
        <nav className='flex items-center w-full h-18 pt-10 px-10'>
            <Link href="/">
                <Logo className=" w-30"/>
            </Link>

            <ul className="flex gap-6 w-fit mx-auto text-slate-700">
                <li> <Link href="#tecnologies" className="hover:text-amber-500 transition-colors">Tecnologia</Link> </li>
                <li> <Link href="#team" className="hover:text-amber-500 transition-colors">Nosso time</Link> </li>
                <li> <Link href="#questions" className="hover:text-amber-500 transition-colors">Perguntas frequentes</Link> </li>
            </ul>

            <ul className="flex gap-6 w-fit">
                <li> <Link href="" className="flex items-center px-4 h-10 text-slate-700 border border-slate-300 rounded-full hover:bg-black/5 transition-colors duration-200 ease-in-out">Entrar</Link> </li>
                <li> <Link href="" className="flex items-center px-4 h-10 rounded-full bg-amber-500 text-white text-base font-medium hover:bg-amber-500/80  transition-colors duration-200 ease-in-out">Criar uma conta</Link> </li>
            </ul>
        </nav>
        </>
    )
}