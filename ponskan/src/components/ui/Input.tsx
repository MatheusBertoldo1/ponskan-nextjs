import { forwardRef, InputHTMLAttributes } from "react";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
    textLabel: string
    error?: string,
    name: string
}

export const Input = forwardRef<HTMLInputElement, Props>(({ textLabel, error, name, ...props }, ref) => {
    return (
        <div className="flex flex-col h-14 w-full gap-2 mb-2">
            <div className=" relative h-fit w-full ">
                <input id={name} name={name} ref={ref} {...props} placeholder=" " className="peer px-3 w-full h-12 text-slate-600 rounded-xl border border-slate-300 outline-none focus:border-amber-400 transition-colors" /> 
                <label htmlFor={name} className="absolute text-md text-slate-500 px-2 left-3 top-3 bg-slate-50 peer-focus:-top-2 peer-focus:text-amber-400 peer-focus:text-xs peer-not-placeholder-shown:-top-2 peer-not-placeholder-shown:text-amber-400 peer-not-placeholder-shown:text-xs transition-all">{textLabel}</label>
            </div>

            {/* Exibição condicional de erro */}
            {error && (
                <span className="text-xs text-right w-full text-red-500">
                    {error}
                </span>
            )}
        </div>
    )
})