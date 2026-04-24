import { Logo } from "@/assets/icons/Logo"

export const Devices = () => {
    return(
        <>
        <section id="devices" className="flex h-175 items-center justify-end overflow-hidden bg-amber-500 ">
            <div className="flex flex-col gap-4 w-100 h-[75%]">
                {/* Card-button devices */}
                <div className="flex flex-col w-full h-38 gap-4 pl-4 py-4 border bg-slate-50/40 border-slate-50 rounded-tl-2xl rounded-bl-2xl">
                    <h3 className="font-semibold text-2xl text-slate-50">Web</h3>
                    <p className="text-base text-slate-50">Gerenciamento total do pomar, acesso a relatórios, mapa em tempo real, métricas e muito mais.</p>
                </div>
                
                <div className="flex flex-col w-full h-38 gap-4 pl-4 py-4 border border-slate-50 rounded-tl-2xl rounded-bl-2xl">
                    <h3 className="font-semibold text-2xl text-slate-50">Dispositivos móveis</h3>
                    <p className="text-base text-slate-50">Baixe nosso App para ter acesso remoto às principais funcionalidades de onde estiver.</p>
                </div>
            </div>

            <div className="flex flex-col flex-1 max-w-210 h-[80%] bg-slate-50 rounded-tl-2xl rounded-bl-2xl">
                <div className="w-full h-12 flex gap-2 px-6 items-center border-b border-slate-300">
                    <div className="h-3 w-3 rounded-full bg-slate-400"></div>
                    <div className="h-3 w-3 rounded-full bg-slate-400"></div>
                    <div className="h-3 w-3 rounded-full bg-slate-400"></div>
                </div>

                <div className="flex flex-1">
                    {/* Navbar */}
                    <div className="flex flex-col w-40 py-10 px-5 items-baseline border-r border-slate-300 ">
                        <Logo className="mb-10"/>

                        <ul className="flex flex-col gap-4">
                            <li className="cursor-pointer">Home</li>
                            <li className="cursor-pointer">Análises</li>
                            <li className="cursor-pointer">Relatórios</li>
                        </ul>

                        <ul className="flex flex-col gap-4 mt-auto">
                            <li className="cursor-pointer">Configurações</li>
                            <li className="cursor-pointer">Ajuda</li>
                        </ul>
                    </div>

                    {/* content */}
                    <div className="flex flex-1 flex-col">
                        <h1 className="w-full py-2 pl-4 font-bold text-xl border-b border-slate-300">Dashboard</h1>
                        
                        {/* Índices */}
                        <div className="flex gap-3 pl-4 py-4">
                            <div className="flex flex-col w-fit px-2 py-2 rounded-xl border border-slate-300">
                                <h3 className="text-lg font-medium text-slate-600">Fotos analisadas</h3>
                                <p className="text-4xl font-bold text-slate-700">97 <span className="inline-flex px-2 font-normal text-sm text-green-600 rounded-sm bg-green-200 ">+7,5%</span></p>
                                <p className="text-sm font-light">Em comparação aos últimos 7 dias</p>
                            </div>

                            <div className="flex flex-col w-fit px-2 py-2 rounded-xl border border-slate-300">
                                <h3 className="text-lg font-medium text-slate-600">Patologia confirmada</h3>
                                <p className="text-4xl font-bold text-slate-700">7 <span className="inline-flex px-2 font-normal text-sm text-red-700 rounded-sm bg-red-200 ">+1,5%</span></p>
                                <p className="text-sm font-light">Em comparação aos últimos 7 dias</p>
                            </div>
                        </div>

                        {/* Gráfico */}
                        <div className="flex flex-col gap-3 pl-4 py-4 ml-4 rounded-xl border border-slate-300">
                            <h3 className="text-lg font-bold text-slate-600">Análise e confirmação</h3>

            
                            <div className="flex gap-3 w-fit px-4">
                                <ul className="flex flex-col-reverse gap-4 pb-15 text-sm text-slate-600">
                                    <li>0</li>
                                    <li>5</li>
                                    <li>10</li>
                                    <li>15</li>
                                </ul>

                                <div className="flex h-full w-max gap-2">
                                    <div className="flex flex-col-reverse items-center w-21">
                                        <p className="text-sm">6 abril, 2026</p>
                                        <p>Segunda</p>
                                        <div className="flex flex-col-reverse h-full w-[70%] bg-slate-200 rounded-sm">
                                            <div className="flex w-full h-10 rounded-sm bg-amber-500"></div>
                                        </div>
                                    </div>
                                    <div className="flex flex-col-reverse items-center w-21">
                                        <p className="text-sm">7 abril, 2026</p>
                                        <p>Terça</p>
                                        <div className="flex flex-col-reverse h-[50%] w-[70%] bg-slate-200 rounded-sm">
                                            <div className="flex w-full h-15 rounded-sm bg-amber-500"></div>
                                        </div>
                                    </div>
                                    <div className="flex flex-col-reverse items-center w-21">
                                        <p className="text-sm">8 abril, 2026</p>
                                        <p>Quarta</p>
                                        <div className="flex flex-col-reverse h-[60%] w-[70%] bg-slate-200 rounded-sm">
                                            <div className="flex w-full h-1 rounded-sm bg-amber-500"></div>
                                        </div>
                                    </div>
                                    <div className="flex flex-col-reverse items-center w-21">
                                        <p className="text-sm">9 abril, 2026</p>
                                        <p>Quinta</p>
                                        <div className="flex flex-col-reverse h-[25%] w-[70%] bg-slate-200 rounded-sm">
                                            <div className="flex w-full h-1 rounded-sm bg-amber-500"></div>
                                        </div>
                                    </div>
                                    <div className="flex flex-col-reverse items-center w-21">
                                        <p className="text-sm">10 abril, 2026</p>
                                        <p>Sexta</p>
                                        <div className="flex flex-col-reverse h-[33%] w-[70%] bg-slate-200 rounded-sm">
                                            <div className="flex w-full h-5 rounded-sm bg-amber-500"></div>
                                        </div>
                                    </div>
                                    <div className="flex flex-col-reverse items-center w-21">
                                        <p className="text-sm">11 abril, 2026</p>
                                        <p>Sábado</p>
                                        <div className="flex flex-col-reverse h-[30%] w-[70%] bg-slate-200 rounded-sm">
                                            <div className="flex w-full h-3 rounded-sm bg-amber-500"></div>
                                        </div>
                                    </div>
                                </div>      
                            </div>


                            <p><span className="inline-flex px-2 font-normal text-sm text-slate-600 rounded-sm bg-slate-200">53</span> <span className="inline-flex px-2 font-normal text-sm text-slate-50 rounded-sm bg-amber-500">15</span></p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}