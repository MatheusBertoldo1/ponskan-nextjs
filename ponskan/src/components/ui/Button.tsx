import { cn } from "@/lib/utils"
import { tv, VariantProps } from "tailwind-variants"

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof button> {
    children: React.ReactNode;
}

const button = tv({
    base: "flex px-4 h-12 w-fit justify-center items-center text-base font-inter font-medium rounded-2xl transition-all active:scale-97",
    variants: {
        variant: {
            primary: "bg-amber-500 hover:bg-amber-600/90 text-white cursor-pointer",
            secondary: "text-slate-700 border border-slate-300 hover:bg-black/5 text-slate-700 cursor-pointer",
            disabled: "opacity-50 cursor-not-allowed pointer-events-none bg-slate-200 text-slate-500 active:none"
        }
    },
    defaultVariants: {
        variant: "primary"
    }
})

export const Button = ({className, children, variant, ...props}: Props) => {
    
    return(
        <button className={cn(button({variant}), className)} {...props}>
            {children}
        </button>
    )
}