import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuItem,
    SidebarMenuButton,
    SidebarGroupContent,
    SidebarFooter
  } from "@/components/ui/sidebar"
  import { Mic, MessageSquare, Film, Database } from "lucide-react"
  import { SignOutButton } from "@clerk/astro/react"


  const creationItems = [
    {
      title: "Clip Creator 🔥",
      url: "/app/clip-creator",
      icon: Film,
    },
    {
      title: "Text to Speech", 
      url: "/app/text-to-speech",
      icon: Mic,
    },    
    {
      title: "LipSync",
      url: "/app/lipsync",
      icon: MessageSquare,
    }
  ]

  const managementItems = [
    {
      title: "My Assets",
      url: "/app/assets",
      icon: Database,
    }
  ]

  export function AppSidebar() {
    return (
      <Sidebar className="bg-white border-r border-neutral-200 dark:bg-neutral-900 dark:border-neutral-800">
        <SidebarContent className="py-6">
          <SidebarGroup>
            <SidebarGroupLabel className="px-6 mb-0 flex items-center gap-2">
              <img src="/logo.svg" alt="Podcast4.me" className="w-8 h-8" />
              <span className="font-bold text-xl text-primary-600 dark:text-primary-400">Podcast4.me</span>
            </SidebarGroupLabel>
          </SidebarGroup>

          <SidebarGroup className="mt-0">
            <SidebarGroupLabel className="px-6 mb-2 text-sm text-neutral-500 dark:text-neutral-400">
              Content Creation
            </SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {creationItems.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild>
                      <a 
                        href={item.url} 
                        className="flex items-center gap-3 px-6 py-3 text-neutral-700 hover:bg-neutral-100 hover:text-primary-600 rounded-lg mx-2 transition-colors dark:text-neutral-200 dark:hover:bg-neutral-800 dark:hover:text-primary-400"
                      >
                        <item.icon className="w-5 h-5" />
                        <span className="font-medium">{item.title}</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>

          <SidebarGroup className="mt-6">
            <SidebarGroupLabel className="px-6 mb-2 text-sm text-neutral-500 dark:text-neutral-400">
              Management
            </SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {managementItems.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild>
                      <a 
                        href={item.url} 
                        className="flex items-center gap-3 px-6 py-3 text-neutral-700 hover:bg-neutral-100 hover:text-primary-600 rounded-lg mx-2 transition-colors dark:text-neutral-200 dark:hover:bg-neutral-800 dark:hover:text-primary-400"
                      >
                        <item.icon className="w-5 h-5" />
                        <span className="font-medium">{item.title}</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>

        <SidebarFooter className="p-6 border-t border-neutral-200 dark:border-neutral-800">
          <SignOutButton>
            <button className="flex items-center gap-2 px-4 py-2 font-bold text-black bg-primary-200 rounded-md w-full border-2 border-gray-800 shadow-[2px_2px_0px_0px_rgba(0,0,0,0.8)] transition-all hover:bg-primary-400 dark:text-black">
              <span>Sign Out</span>
            </button>
          </SignOutButton>
        </SidebarFooter>
      </Sidebar>
    )
  }