import { HeadlineSection } from "../elements/HeadlineSection"
import Image from "next/image"
import { CalendarIcon, ChevronDownIcon, DocumentIcon, CheckIcon } from "@/assets/icons/HeroIcons"

export const Devices = () => {
    return(
        <>
        <section id="devices" className="flex flex-col items-center min-h-dvh py-22 px-4 relative bg-amber-500 select-none">
            <HeadlineSection className="text-white z-1" title="Gerencie seu pomar por onde quiser" subtitle="Todas as informações necessárias em qualquer lugar"/>
            
            {/* Grid principal do dashboard. */}
            <div className="grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full max-w-300 relative p-4 aspect-video z-1 font-lexend"> 
                
                {/* Card 1: Lado a lado com o produtor. */}
                <div className="flex relative flex-col px-6 pt-6 col-span-1 row-span-2 bg-amber-200 rounded-3xl shadow-lg overflow-hidden hover:scale-103 transition-all">
                    <p className="pb-2 text-xl font-lexend font-bold text-amber-800">Lado a lado com o produtor</p>

                    <div className="absolute w-65 lg:w-80 aspect-square -bottom-18 left-0">
                        <div className="flex relative flex-1 w-full h-full">
                            <Image fill src="/images/person.webp" alt="" className="object-cover"/>
                        </div>
                    </div>
                </div>

                {/* Card 2: KPI de Acurácia IA. */}
                <div className="flex flex-col justify-between p-6 col-span-1 row-span-1 bg-linear-to-br from-amber-50 to-slate-200 rounded-3xl shadow-lg hover:scale-103 transition-all">
                    <span className="text-xs font-bold tracking-wider text-amber-500">Acurácia IA</span>
                    <p className="text-4xl font-black text-slate-700 tracking-tight">99.8%</p>
                    <p className="text-xs text-slate-500 font-medium mt-1">Taxa de identificação</p>
                </div>

                {/* Card 3: KPI de Plantas Monitoradas. */}
                <div className="flex flex-col justify-between p-6 col-span-1 row-span-1 bg-linear-to-br from-amber-50 to-slate-200 rounded-3xl shadow-lg hover:scale-103 transition-all">
                    <span className="text-xs tracking-wider font-bold text-amber-500">Plantas Monitoradas</span>
                    <p className="text-4xl font-black text-slate-700 tracking-tight">1.240</p>
                    <p className="text-xs text-emerald-600 font-bold">+12% hoje</p>
                </div>

                {/* Card 4: Status do Pomar. */}
                <div className="hidden lg:flex flex-col px-4 py-8 justify-between col-span-1 row-span-2 items-center bg-amber-100 rounded-3xl shadow-lg hover:scale-103 transition-all">
                    <CheckIcon className="w-24 py-2 px-2 text-white bg-amber-500 rounded-full"/>
                    <p className="text-xl font-medium text-amber-600">Pomar Saudável</p>
                    <p className="text-center text-amber-400">Todas as medidas de controle foram eficazes</p>
                    <p className="px-3 py-2 rounded-full bg-amber-500 text-white">Voltar para Home</p>
                </div>

                {/* Card 5: Mockup central. */}
                <div className="flex relative flex-col px-6 pt-6 col-span-2 row-span-2 bg-slate-50 rounded-3xl shadow-lg overflow-hidden hover:scale-103 transition-all">
                    <p className="pb-2 text-3xl lg:text-4xl font-lexend font-bold text-amber-600 max-w-85 lg:max-w-100">Eficiência operacional e monitoramento inteligente</p>

                    <div className="absolute w-150 aspect-square -bottom-45 -right-70">
                        <div className="flex relative flex-1 w-full h-full">
                            <Image fill src="/images/mockup.webp" alt="" className="object-cover"/>
                        </div>
                    </div>
                </div>

                {/* Card 6: KPI de Redução de Fungicida. */}
                <div className="flex flex-col p-6 h-full justify-between col-span-1 row-span-1 bg-linear-to-br from-slate-50 to-slate-200 rounded-3xl shadow-lg hover:scale-103 transition-all">
                    <span className="text-xs font-bold tracking-wider text-amber-500">Redução de Fungicida</span>
                    <p className="text-4xl font-black text-slate-700 tracking-tight">24%</p>
                    <p className="text-xs text-slate-500 font-medium mt-1">Economia mensal acumulada</p>
                </div>

                {/* Card 7: Branding Ponskan. */}
                <div className="hidden md:flex lg:flex relative flex-col px-6 pt-6 col-span-1 row-span-2 bg-amber-200 rounded-3xl shadow-lg overflow-hidden hover:scale-103 transition-all">
                    <p className="pb-2 text-5xl font-lexend font-bold text-amber-800">Ponskan</p>
                    <p className="pb-2 text-5xl font-lexend font-medium text-amber-800">Ponskan</p>
                    <p className="pb-2 text-5xl font-lexend font-normal text-amber-800">Ponskan</p>
                    <p className="pb-2 text-5xl font-lexend font-light text-amber-800">Ponskan</p>
                    <p className="pb-2 text-5xl font-lexend font-extralight text-amber-800">Ponskan</p>

                    <div className="absolute w-70 aspect-square bottom-0 -right-22">
                        <div className="flex relative flex-1 w-full h-full">
                            <Image fill src="/images/men.webp" alt="" className="object-cover"/>
                        </div>
                    </div>
                </div>

                {/* Card 8: Controles. */}
                <div className="flex justify-center items-center gap-4 col-span-2 row-span-1 bg-linear-to-br from-slate-50 to-slate-200 rounded-3xl shadow-lg hover:scale-103 transition-all">
                    <div className="flex rounded-xl text-slate-600 border border-slate-300 shadow">
                        <span className="py-2 px-2 flex gap-2"><CalendarIcon className="w-6"/>Data atual - 15 abril, 2026<ChevronDownIcon className="w-6"/></span>
                    </div>

                    <div className="flex rounded-xl items-center justify-center py-2 px-2 gap-2 text-slate-50 bg-amber-500 shadow-md whitespace-nowrap ">
                        <DocumentIcon className="w-5" /> <span>Exportar para PDF</span>
                    </div>
                </div>

                {/* Card 9: Relatórios finalizados. */}
                <div className="flex flex-col justify-between p-6 col-span-1 row-span-1 bg-linear-to-br from-slate-50 to-slate-200 rounded-3xl shadow-lg hover:scale-103 transition-all">
                    <span className="text-xs font-bold tracking-wider text-amber-500">Relatórios finalizados</span>
                    <p className="text-4xl font-black text-slate-700 tracking-tight">14</p>
                    <p className="text-xs text-slate-500 font-medium mt-1">Nos últimos 30 dias</p>
                </div>
            </div>                  

            <Image src="/images/bg2.avif" fill sizes="100vw" alt="" className="absolute object-cover opacity-35 z-0"/>
        </section>
        </>
    )
}