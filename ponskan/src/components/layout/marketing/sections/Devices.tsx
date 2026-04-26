import { CardDevices } from "../elements/CardDevices"
import { HeadlineSection } from "../elements/HeadlineSection"
import Image from "next/image"

export const Devices = () => {
    return(
        <>
        <section id="devices" className="flex-col items-center min-h-dvh py-22 relative bg-amber-500 select-none">
            <HeadlineSection className="text-white z-1" title="Gerencie seu pomar por onde quiser" subtitle="Todas as informações necessárias em qualquer lugar"/>

            <CardDevices/>

            <Image src="/images/bg2.avif" fill sizes="100vw" alt="" className="absolute object-cover opacity-35 z-0"/>
        </section>
        </>
    )
}