import { Logo } from "@/assets/svg/Logo"
import Link from "next/link"

export const Header = () => {
    return (
        <>
        <nav className='flex items-center w-full h-18 px-10 border-b border-gray-200'>
            <Link href="/">
                <Logo className=" w-30"/>
            </Link>

            <ul className="flex gap-6 w-fit mx-auto">
                <li> <Link href="#home">Início</Link> </li>
                <li> <Link href="#devices">Dispositivos</Link> </li>
                <li> <Link href="#howWorks">Como funciona</Link> </li>
                <li> <Link href="#advantage">Vantagens</Link> </li>
                <li> <Link href="#questions">Perguntas frequentes</Link> </li>
            </ul>

            <ul className="flex gap-6 w-fit">
                <li> <Link href="" className="flex items-center px-4 h-10 border rounded-full hover:bg-black/5 transition-colors duration-200 ease-in-out">Entrar</Link> </li>
                <li> <Link href="" className="flex items-center px-4 h-10 rounded-full bg-amber-500 text-white text-base font-medium hover:bg-amber-500/80  transition-colors duration-200 ease-in-out">Criar uma conta</Link> </li>
            </ul>
        </nav>
        </>
    )
}