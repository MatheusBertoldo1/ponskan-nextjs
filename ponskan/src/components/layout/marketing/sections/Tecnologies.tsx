import { DevicePhoneMobileIcon, CpuChipIcon, CloudArrowUpIcon, DocumentTextIcon, MapPinIcon, ArrowTrendingUpIcon } from "@/assets/icons/HeroIcons"

export const Tecnologies = () => {
    return(
        <>
        <section id="tecnologies" className="flex flex-col w-full h-175 items-center py-22">
            <h1 className="mb-2 text-4xl text-center text-slate-700 font-bold max-w-200">Enquanto a tecnologia protege a safra prospera</h1>
            <p className="mb-15 text-sm text-slate-600 font-light ">Entenda como nossa tecnologia vai beneficiar sua produção</p>

            <div className="grid grid-cols-3 max-w-270 gap-y-10">
                <div className="flex flex-col">
                    <div className="w-fit h-fit px-1 py-1 mb-1 rounded-md bg-slate-600">
                        <DevicePhoneMobileIcon className="w-5 h-5 fill-slate-50"/>
                    </div>
                    <p className="mb-2 text-sm text-amber-500">Monitoramento em tempo real</p>
                    <h3 className="text-lg text-slate-700 font-semibold">Dispositivos móveis</h3>
                    <p className="text-sm text-slate-500">Monitoramento via dispositivos móveis, captação de imagens da planta infectada</p>
                </div>

                <div className="flex flex-col">
                    <div className="w-fit h-fit px-1 py-1 mb-1 rounded-md bg-slate-600">
                        <CpuChipIcon className="w-5 h-5 fill-slate-50"/>
                    </div>
                    <p className="mb-2 text-sm text-amber-500">Inteligência artificial</p>
                    <h3 className="text-lg text-slate-700 font-semibold">Melhores diagnósticos</h3>
                    <p className="text-sm text-slate-500">Usamos o poder da inteligência artificial para entregar os melhores resultados</p>
                </div>

                <div className="flex flex-col">
                    <div className="w-fit h-fit px-1 py-1 mb-1 rounded-md bg-slate-600">
                        <CloudArrowUpIcon className="w-5 h-5 fill-slate-50"/>
                    </div>
                    <p className="mb-2 text-sm text-amber-500">Computação em nuvem</p>
                    <h3 className="text-lg text-slate-700 font-semibold">Disponibilidade 24h</h3>
                    <p className="text-sm text-slate-500">Acesse todas as informações necessárias em qualquer hora e lugar</p>
                </div>


                <div className="flex flex-col">
                    <div className="w-fit h-fit px-1 py-1 mb-1 rounded-md bg-slate-600">
                        <DocumentTextIcon className="w-5 h-5 fill-slate-50"/>
                    </div>
                    <p className="mb-2 text-sm text-amber-500">Relatórios completos</p>
                    <h3 className="text-lg text-slate-700 font-semibold">Decisões baseadas em dados</h3>
                    <p className="text-sm text-slate-500">Suas decisões baseadas em todas as informações necessárias</p>
                </div>

                <div className="flex flex-col">
                    <div className="w-fit h-fit px-1 py-1 mb-1 rounded-md bg-slate-600">
                        <MapPinIcon className="w-5 h-5 fill-slate-50"/>
                    </div>
                    <p className="mb-2 text-sm text-amber-500">Localização exata</p>
                    <h3 className="text-lg text-slate-700 font-semibold">Saiba exatamente onde está o problema</h3>
                    <p className="text-sm text-slate-500">Foque os esforços exatamente onde é necessário</p>
                </div>


                <div className="flex flex-col">
                    <div className="w-fit h-fit px-1 py-1 mb-1 rounded-md bg-slate-600">
                        <ArrowTrendingUpIcon className="w-5 h-5 fill-slate-50"/>
                    </div>
                    <p className="mb-2 text-sm text-amber-500">Menos custos e mais eficiência</p>
                    <h3 className="text-lg text-slate-600 font-semibold">Otimização de Recursos</h3>
                    <p className="text-sm text-slate-500">Aplique defensivos e fertilizantes apenas onde é necessário, economizando recursos e aumentando a rentabilidade.</p>
                </div>
            </div>
        </section>
        </>
    )
}