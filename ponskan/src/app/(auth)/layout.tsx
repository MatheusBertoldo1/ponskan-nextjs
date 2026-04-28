import { LogoCurrentColor } from "@/assets/icons/LogoCurrentColor";

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
    return (
        <div className="flex h-dvh w-dvw justify-center items-center bg-slate-100">
            
            <div className="w-full max-w-150 bg-white shadow-sm overflow-hidden font-lexend rounded-3xl">
                {/* Header */}
                <div className="bg-amber-500 py-6 flex items-center justify-center">
                    <LogoCurrentColor className=" w-10 h-10 text-white" />
                </div>
                {children}
                
            </div>
        </div>

    );
}