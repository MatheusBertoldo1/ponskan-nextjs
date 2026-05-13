'use client'

import { Header } from "@/components/layout/dashboard/Header"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogTitle, DialogTrigger, DialogHeader, DialogDescription } from "@/components/ui/dialog"
import { Upload } from "lucide-react"
import { useState } from "react"
import { ChangeEvent } from "react"

export default function Page() {
    const maxImages = 3 // => 4
    const [countImage, setCountImage] = useState(0)
    const[images, setImages] = useState<(File | undefined)[]>([])

    const keepFiles = (e: ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0]


        if(file){
            countImage <= maxImages && setImages([file])
            setCountImage(Math.max(countImage + 1, countImage))
            e.target.value = ""
        }
    }

    return (
        <>
            <Header />

            <div className="flex justify-center items-center w-full h-full">
                <Dialog>
                    <DialogTrigger asChild>
                        <Button>Fazer upload de imagem</Button>
                    </DialogTrigger>

                    <DialogContent>
                        <DialogHeader>
                            <DialogTitle>Fazer upload de imagens</DialogTitle>
                        </DialogHeader>
                        <DialogDescription>Escolha 4 imagens de posições diferentes do mesmo fruto ou folha</DialogDescription>


                        <div className="w-full h-fit flex flex-col items-center gap-4 p-6 border-2 border-dashed border-chart-1 rounded-lg bg-slate-50 ">
                            <Button asChild className="flex" variant={countImage <= maxImages ? "default" : "ghost"} >
                                <label htmlFor="file1" className="gap-3" >
                                    <Upload className="w-5"/>Upload
                                </label>
                            </Button>

                            <input onChange={keepFiles} multiple type="file" accept="image/*" name="file1" id="file1" className="hidden" disabled={countImage <= maxImages ? false : true}/>
                            <p className="text-chart-3 text-center">JPG, JPEG, PNG. Max 10 MB {images.length}</p>
                        </div>
                    </DialogContent>
                </Dialog>
            </div>
        </>
    )
}