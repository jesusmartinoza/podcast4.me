import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/ui/app-sidebar"
import { UserButton } from "@clerk/astro/react"

 
export default function App({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="w-full">
        <div className="flex items-center justify-between w-full p-4">
          <div className="md:hidden">
            <SidebarTrigger />
          </div>
          <div className="ml-auto">
            <UserButton />
          </div>
        </div>
        <div className="flex-1 p-4 flex items-center justify-center">
          {children}
        </div>
      </main>
    </SidebarProvider>
  )
}