'use client'

import { Header } from "@/components/layout/dashboard/Header"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogTitle, DialogTrigger, DialogHeader, DialogDescription, DialogClose } from "@/components/ui/dialog"
import Image from "next/image"
import { Upload } from "lucide-react"
import { useState } from "react"
import { ChangeEvent } from "react"
import { ProgressBar } from "@/components/ui/ProgressBar"
import { UploapImagesForAnalysis } from "@/services/uploadFile"
import { image } from "framer-motion/client"

export default function Page() {
    const maxImages = 3 // => 4
    const [images, setImages] = useState<(File)[]>([])
    const [isSubmiting, setIsSubmiting] = useState(false)
    const [isOpen, setIsOpen] = useState(false) // Alterar o comportamento do Dialog
    const imagesToFormData = new FormData()

    const keepFiles = (e: ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0]
        if (!file || images.length > maxImages) return
        setImages(prev => [...prev, file]) // Pega o ultimo estado e add file
        e.target.value = "" // Limpa valor do input -> não puxar a mesma imagem
    }

    const submitFiles = async () => {
        setIsSubmiting(true)
        images.map((file) => {
            imagesToFormData.append("files", file)
        })
        const response = await UploapImagesForAnalysis(imagesToFormData)

        if (response.success) {
            alert("Deu bom" + response.status)
            setIsSubmiting(false)
        } else {
            alert("Deu ruim" + response.status)
            setIsSubmiting(false)
            // clearFileAndClose()
        }
    }

    const clearFileAndClose = () => {
        setImages([])
        setIsOpen(false)
    }

    return (
        <>
            <Header />
            <div className="flex justify-center items-center w-full h-full">
                <Dialog open={isOpen} onOpenChange={setIsOpen}>
                    <DialogTrigger asChild>
                        <Button>Fazer upload de imagem</Button>
                    </DialogTrigger>

                    <DialogContent className="overflow-hidden">
                        <ProgressBar range={maxImages + 1} stage={images.length} />

                        <DialogHeader>
                            <DialogTitle>Fazer upload de imagens</DialogTitle>
                        </DialogHeader>
                        <DialogDescription>Escolha 4 imagens de posições diferentes do mesmo fruto ou folha</DialogDescription>

                        <div className="w-full h-fit flex flex-col items-center gap-4 p-6 border-2 border-dashed border-chart-1 rounded-lg bg-slate-50 ">
                            <Button asChild className="flex" variant={images.length <= maxImages ? "default" : "ghost"} >
                                <label htmlFor="file1" className="gap-3" >
                                    <Upload className="w-5" />Upload
                                </label>
                            </Button>

                            <input onChange={keepFiles} type="file" accept="image/*" name="file1" id="file1" className="hidden" disabled={images.length <= maxImages ? false : true} />
                            <p className="text-chart-3 text-center">JPG, JPEG, PNG. Max 5mb </p>
                        </div>

                        <div className="w-full h-20 flex justify-between gap-2">
                            <div className="aspect-square relative rounded-lg overflow-hidden bg-slate-200">
                                {images[0] && <Image fill src={URL.createObjectURL(images[0])} alt="" />}
                            </div>

                            <div className="aspect-square relative rounded-lg overflow-hidden bg-slate-200">
                                {images[1] && <Image fill src={URL.createObjectURL(images[1])} alt="" />}
                            </div>

                            <div className="aspect-square relative rounded-lg overflow-hidden bg-slate-200">
                                {images[2] && <Image fill src={URL.createObjectURL(images[2])} alt="" />}
                            </div>

                            <div className="aspect-square relative rounded-lg overflow-hidden bg-slate-200">
                                {images[3] && <Image fill src={URL.createObjectURL(images[3])} alt="" />}
                            </div>
                        </div>

                        <Button
                            variant={images.length - 1 == maxImages && !isSubmiting ? "default" : "ghost"}
                            disabled={images.length < maxImages || isSubmiting}
                            onClick={submitFiles}
                        >
                            {isSubmiting ? "Enviar para análise" : "Enviando dados"}
                        </Button>
                    </DialogContent>
                </Dialog>
            </div>
        </>
    )
}