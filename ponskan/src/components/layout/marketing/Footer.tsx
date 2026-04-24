import Link from "next/link"

export const Footer = () => {
    return (
        <>
        <footer className="flex flex-col w-full items-center py-4 gap-2">
            <ul className="flex gap-4">
                <li><Link href="" className="text-slate-600 hover:text-amber-500 transition-colors">Políticas de privacidade</Link> </li>
                <li><Link href="" className="text-slate-600 hover:text-amber-500 transition-colors">Termos de uso</Link> </li>
                <li><Link href="" className="text-slate-600 hover:text-amber-500 transition-colors">Uso de cookies</Link> </li>
            </ul>

            <p className="text-slate-700">© 2026 Ponskan. Todos os direitos reservados.</p>
        </footer>
        </>
    )
}