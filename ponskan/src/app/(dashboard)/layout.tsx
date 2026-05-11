import { SidebarInset, SidebarProvider, } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar";

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
    return (
        <SidebarProvider>
            <AppSidebar />

            <SidebarInset>
                
                <div className="flex flex-1 flex-col gap-4">
                    {children}
                </div>
            </SidebarInset>
        </SidebarProvider>
    );
}