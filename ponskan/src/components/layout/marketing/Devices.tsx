export const Devices = () => {
    return(
        <>
        <div id="#devices" className="flex h-175 items-center justify-end overflow-hidden bg-amber-500 ">
            <div className="flex flex-col gap-4 w-100 h-[75%]">
                <div className="flex flex-col w-full h-38 gap-4 pl-4 py-4 border bg-slate-50/40 border-slate-50 rounded-tl-2xl rounded-bl-2xl">
                    <h3 className="font-semibold text-2xl text-slate-50">Web</h3>
                    <p className="text-base text-slate-50">Gerenciamento total do pomar, acesso a relatórios, mapa em tempo real, métricas e muito mais.</p>
                </div>
                
                <div className="flex flex-col w-full h-38 gap-4 pl-4 py-4 border border-slate-50 rounded-tl-2xl rounded-bl-2xl">
                    <h3 className="font-semibold text-2xl text-slate-50">Dispositivos móveis</h3>
                    <p className="text-base text-slate-50">Baixe nosso App para ter acesso remoto às principais funcionalidades de onde estiver.</p>
                </div>
            </div>

            <div className="flex flex-4 max-w-200 h-[80%] bg-slate-50 rounded-tl-2xl rounded-bl-2xl">

            </div>
        </div>
        </>
    )
}