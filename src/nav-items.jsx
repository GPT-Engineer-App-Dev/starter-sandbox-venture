import { LayoutDashboard, Settings, HelpCircle } from "lucide-react";
import Index from "./pages/Index.jsx";

export const navItems = [
  {
    title: "Dashboard",
    to: "/",
    icon: <LayoutDashboard className="h-4 w-4" />,
    page: <Index />,
  },
  {
    title: "Settings",
    to: "/settings",
    icon: <Settings className="h-4 w-4" />,
    page: <div>Settings Page</div>,
  },
  {
    title: "Help",
    to: "/help",
    icon: <HelpCircle className="h-4 w-4" />,
    page: <div>Help Page</div>,
  },
];
