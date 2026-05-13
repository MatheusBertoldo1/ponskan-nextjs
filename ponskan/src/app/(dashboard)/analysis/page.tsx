'use client'

import { Header } from "@/components/layout/dashboard/Header"
import { Button } from "@/components/ui/Button"

export default function Page() {
    return (
        <>
        <Header />

        <div className="flex justify-center items-center w-full h-full">

            <Button>Fazer upload de imagem</Button>
        </div>
        </>
    )
}