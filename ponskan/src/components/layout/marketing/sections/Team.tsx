import { ServerStackIcon, CheckBadgeIcon, AdjustmentsVerticalIcon, PuzzlePieceIcon, PencilSquareIcon} from "@heroicons/react/20/solid"

export const Team = () => {
    return(
        <>
        <section id="team" className="flex flex-col w-full h-175 items-center py-22">
            <h2 className="mb-2 text-4xl text-center text-slate-700 font-bold max-w-200">Nosso time de especialistas à sua disposição</h2>
            <p className="mb-15 text-sm text-slate-600 font-light">Uma equipe inteira para te atender da melhor forma</p>

            <div className="flex max-w-270 gap-4">
                <div className="flex flex-col w-50 h-75 border border-slate-300 rounded-xl">
                    <div className="flex flex-col flex-1 px-4 py-4 border-b border-slate-300">
                        <div className="w-fit h-fit px-1 py-1 mb-1 rounded-md bg-slate-600">
                            <ServerStackIcon className="w-5 h-5 fill-slate-50"/>
                        </div>
                        <p className="text-sm">Cuido da segurança e organização dos dados da sua safra, garantindo informações sólidas para sua gestão.</p>
                    </div>

                    <div className="flex items-center justify-end gap-4 py-4 px-2">
                        <p className="text-sm">Arthur Parra</p>
                        <div className="w-8 h-8 rounded-full bg-slate-300">

                        </div>
                    </div>
                </div>

                <div className="flex flex-col w-50 h-75 border border-slate-300 rounded-xl">
                    <div className="flex flex-col flex-1 px-4 py-4 border-b border-slate-300">
                        <div className="w-fit h-fit px-1 py-1 mb-1 rounded-md bg-slate-600">
                            <CheckBadgeIcon className="w-5 h-5 fill-slate-50"/>
                        </div>
                        <p className="text-sm">Asseguro a qualidade e o funcionamento perfeito das regras de negócio que movem o sistema.</p>
                    </div>

                    <div className="flex items-center justify-end gap-4 py-4 px-2">
                        <p className="text-sm">Daniele Fiel</p>
                        <div className="w-8 h-8 rounded-full bg-slate-300">

                        </div>
                    </div>
                </div>

                <div className="flex flex-col w-50 h-75 border border-slate-300 rounded-xl">
                    <div className="flex flex-col flex-1 px-4 py-4 border-b border-slate-300">
                        <div className="w-fit h-fit px-1 py-1 mb-1 rounded-md bg-slate-600">
                            <AdjustmentsVerticalIcon className="w-5 h-5 fill-slate-50"/>
                        </div>
                        <p className="text-sm">Foco na estabilidade e performance da plataforma para que ela nunca deixe você na mão.</p>
                    </div>

                    <div className="flex items-center justify-end gap-4 py-4 px-2">
                        <p className="text-sm">Guilherme Shimada</p>
                        <div className="w-8 h-8 rounded-full bg-slate-300">

                        </div>
                    </div>
                </div>

                <div className="flex flex-col w-50 h-75 border border-slate-300 rounded-xl">
                    <div className="flex flex-col flex-1 px-4 py-4 border-b border-slate-300">
                        <div className="w-fit h-fit px-1 py-1 mb-1 rounded-md bg-slate-600">
                            <PuzzlePieceIcon className="w-5 h-5 fill-slate-50"/>
                        </div>
                        <p className="text-sm">Conecto nossa tecnologia às suas necessidades, levando as melhores soluções até o campo.</p>
                    </div>

                    <div className="flex items-center justify-end gap-4 py-4 px-2">
                        <p className="text-sm">Gustavo Kletelinger</p>
                        <div className="w-8 h-8 rounded-full bg-slate-300">

                        </div>
                    </div>
                </div>

                <div className="flex flex-col w-50 h-75 border border-slate-300 rounded-xl">
                    <div className="flex flex-col flex-1 px-4 py-4 border-b border-slate-300">
                        <div className="w-fit h-fit px-1 py-1 mb-1 rounded-md bg-slate-600">
                            <PencilSquareIcon className="w-5 h-5 fill-slate-50"/>
                        </div>
                        <p className="text-sm">Crio o visual e a experiência do sistema para que usar a Ponskan seja simples e intuitivo.</p>
                    </div>

                    <div className="flex items-center justify-end gap-4 py-4 px-2">
                        <p className="text-sm">Matheus Bertoldo</p>
                        <div className="w-8 h-8 rounded-full bg-slate-300">

                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}