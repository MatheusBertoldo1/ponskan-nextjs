import { SidebarInset, SidebarProvider, } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar";
import { ProcessProvider } from "@/context/ProcessesProvider";

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
    return (
        <SidebarProvider>
            <ProcessProvider>
                <AppSidebar />

                <SidebarInset className="bg-slate-100">
                    {children}
                </SidebarInset>
            </ProcessProvider>
        </SidebarProvider>
    );
}