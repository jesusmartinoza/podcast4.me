import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuItem,
    SidebarMenuButton,
    SidebarGroupContent,
  } from "@/components/ui/sidebar"
  import { Home, Headphones, Mic, BookMarked, Search, User, Settings } from "lucide-react"


  const items = [
    {
      title: "Dashboard",
      url: "/app",
      icon: Home,
    },
    {
      title: "My Podcasts",
      url: "/app/my-podcasts",
      icon: Headphones,
    },
    {
      title: "Saved Episodes",
      url: "/app/saved",
      icon: BookMarked,
    },
    {
      title: "Create",
      url: "/app/create",
      icon: Mic,
    },
    {
      title: "Profile",
      url: "/app/profile",
      icon: User,
    },
    {
      title: "Settings",
      url: "/app/settings",
      icon: Settings,
    },
  ]

  export function AppSidebar() {
    return (
      <Sidebar>
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel>Podcast4.me</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {items.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild>
                      <a href={item.url} className="text-black">
                        <item.icon />
                        <span>{item.title}</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
      </Sidebar>
    )
  }