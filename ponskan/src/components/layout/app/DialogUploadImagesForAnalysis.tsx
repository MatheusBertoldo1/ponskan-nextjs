'use client'
import { Dialog, DialogContent, DialogTitle, DialogTrigger, DialogHeader, DialogDescription, } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"
import { ArrowUpFromLine, SearchIcon } from "lucide-react"
import Image from "next/image"
import { ChangeEvent } from "react"
import { requestAnalyses } from "@/services/requestAnalyses"
import { uploapImagesForAnalyse } from "@/services/uploadFileForAnalyse"
import { ProgressBar } from "@/components/ui/ProgressBar"

export const DialogUploadImagesForAnalysis = () => {
    const [isOpen, setIsOpen] = useState(false) // Alterar o comportamento do Dialog
    const maxImages = 3 // => 4
    const [images, setImages] = useState<(File)[]>([])
    const [isSubmiting, setIsSubmiting] = useState(false)
    const imagesToFormData = new FormData()

    const keepFiles = (e: ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files ? [...e.target.files] : []

        if (file.length < 1) {
            alert("É necessário escolher imagens")
            return
        }
        if ((images.length + file.length) > maxImages) {
            alert("Você selecionou muitas imagens")
            return  
        }

        file.map((item, i) => {
            setImages(prev => [...prev, file[i]]) // Pega o ultimo estado e add file
        })

        e.target.value = "" // Limpa valor do input -> não puxar a mesma imagem
    }

    const submitFiles = async () => {
        setIsSubmiting(true)
        images.map((file) => { // pega as imagens e salva na variavel imagesToFormData / = formData() /
            imagesToFormData.append("images", file)
        })
        const response = await uploapImagesForAnalyse(imagesToFormData) // Função para mandar imgs para análise

        if (response.success) {
            clearFileAndClose()
            setIsSubmiting(false)
        } else {
            alert(response.message)
        }
    }

    const clearFileAndClose = () => {
        setImages([])
        setIsOpen(false)
    }

    return (
        <>
            <Dialog open={isOpen} onOpenChange={setIsOpen}>
                <DialogTrigger className="w-fit" asChild>
                    <Button><ArrowUpFromLine /> Enviar imagens para análise</Button>
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
                                <SearchIcon className="w-5" />Procurar neste computador
                            </label>
                        </Button>

                        <input onChange={keepFiles} multiple type="file" accept="image/*" name="file1" id="file1" className="hidden" disabled={images.length <= maxImages ? false : true} />
                        <p className="text-chart-3 text-center">JPG, JPEG, PNG. Max 5mb. </p>
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
        </>
    )
}