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
      <Sidebar className="bg-white border-r-4 border-black dark:bg-neutral-900 dark:border-neutral-800">
        <SidebarContent className="py-6">
          <SidebarGroup>
            <a href="/">
                <SidebarGroupLabel className="px-6 mb-0 flex items-center gap-2">
                        <img src="/logo.svg" alt="Podcast4.me" className="w-10 h-10 p-1 rotate-1" />
                        <span className="font-black text-xl text-black dark:text-white tracking-tight transform rotate-1">Podcast4.me</span>
                </SidebarGroupLabel>
            </a>
          </SidebarGroup>

          <SidebarGroup className="mt-2">
            <SidebarGroupLabel className="px-6 mb-2 text-sm font-bold text-black uppercase dark:text-white">
              Content Creation
            </SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu className="px-4">
                {creationItems.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild>
                      <a 
                        href={item.url} 
                        className="flex items-center gap-3 px-6 py-3 text-black font-bold hover:bg-yellow-300 rounded-none mx-2 transition-transform hover:-translate-y-1 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] border-2 border-black my-2 dark:text-white dark:hover:bg-primary-500 dark:border-white"
                      >
                        <item.icon className="w-5 h-5" />
                        <span className="font-bold">{item.title}</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>

          <SidebarGroup className="mt-6">
            <SidebarGroupLabel className="px-6 mb-2 text-sm font-bold text-black uppercase dark:text-white">
              Management
            </SidebarGroupLabel>
            <SidebarGroupContent>
            <SidebarMenu className="px-4">
                {managementItems.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild>
                      <a 
                        href={item.url} 
                        className="flex items-center gap-3 px-6 py-3 text-black font-bold hover:bg-green-300 rounded-none mx-2 transition-transform hover:-translate-y-1 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] border-2 border-black my-2 dark:text-white dark:hover:bg-green-500 dark:border-white"
                      >
                        <item.icon className="w-5 h-5" />
                        <span className="font-bold">{item.title}</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>

        <SidebarFooter className="p-6 border-black dark:border-neutral-800">
          <SignOutButton>
            <button className="flex items-center justify-center gap-2 px-4 py-3 font-black text-black bg-red-300 rounded-none w-full border-3 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all hover:bg-red-400 hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] dark:text-black">
              <span className="uppercase tracking-wider">Sign Out</span>
            </button>
          </SignOutButton>
        </SidebarFooter>
      </Sidebar>
    )
  }