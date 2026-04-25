import { CardDevices } from "../elements/CardDevices"

export const Devices = () => {
    return(
        <>
        <section id="devices" className="flex flex-col items-center py-22 bg-amber-500 select-none">
            <div className="">
                <h2 className="mb-2 text-4xl text-center text-slate-50 font-bold max-w-200">Gerencie seu pomar por onde quiser</h2>
                <p className="mb-15 text-sm text-center text-slate-50 font-light">Todas as informações necessárias em qualquer lugar</p>
            </div>

            <CardDevices />
        </section>
        </>
    )
}