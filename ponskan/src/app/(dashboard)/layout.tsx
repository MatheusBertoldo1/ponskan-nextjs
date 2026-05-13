import { SidebarInset, SidebarProvider, } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar";

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
    return (
        <SidebarProvider>
            <AppSidebar />

            <SidebarInset className="bg-slate-100">
                {children}
            </SidebarInset>
        </SidebarProvider>
    );
}