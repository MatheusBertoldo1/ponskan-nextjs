import { match } from "assert"
import { ComponentPropsWithoutRef } from "react"

interface Props extends ComponentPropsWithoutRef<'div'>{
    range: number
    stage: number
}

export const ProgressBar = ({range, stage, ...props} : Props) => {
    // Verificação se o valor passado por stage está entre 0 e o $range
    const currentStage = Math.min(Math.max(1, stage), range)

    // Cálculo da porcentagem
    const percentage = (currentStage / range) * 100;


    return(
        <div className="flex gap-4 items-center w-full">
            <div className={`flex w-full h-3 bg-slate-200 rounded-full transition-all`} {...props}>
                <div style={{width: `${percentage}%`}} className={`h-3 rounded-full bg-linear-to-r from-amber-400 to-amber-500 transition-all`}></div>
            </div>
            
            <p className="w-12 font-lexend text-slate-600 text-sm">{stage}/{range}</p>
        </div>
    )
}