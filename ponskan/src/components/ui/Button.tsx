import { cn } from "@/lib/utils"
import { tv, VariantProps } from "tailwind-variants"
import { ComponentPropsWithoutRef } from "react"

interface Props extends ComponentPropsWithoutRef<'button'>, VariantProps<typeof button> {
    children: React.ReactNode;
}

const button = tv({
    base: "flex px-4 h-12 w-fit justify-center items-center text-base font-inter font-medium rounded-2xl transition-all select-none active:scale-97",
    variants: {
        variant: {
            primary: "bg-amber-500 hover:bg-amber-600/90 text-white cursor-pointer",
            secondary: "text-slate-700 border border-slate-300 hover:bg-black/5 text-slate-700 cursor-pointer",
            disabled: "opacity-50 cursor-not-allowed pointer-events-none bg-slate-200 text-slate-500 active:none outline-none"
        },
    },
    defaultVariants: {
        variant: "primary"
    }
})

export const Button = ({className, children, variant, type, ...props}: Props) => {
    
    return(
        <button type={type} className={cn(button({variant}), className)} {...props}>
            {children}
        </button>
    )
}