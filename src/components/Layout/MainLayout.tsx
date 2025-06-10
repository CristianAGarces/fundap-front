import React, { useState } from "react";
import Sidebar from "@/components/Sidebar/Sidebar";
import UserProfile from "@/components/User/User";
import Link from "next/link";
import { Menu } from "lucide-react";

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen w-full overflow-hidden bg-gray-50">
      {/* Sidebar: drawer en móvil, fijo en md+ */}
      <Sidebar
        isMobileOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />
      <div className="flex flex-col flex-1 overflow-hidden">
        <header className="h-16 bg-white shadow-sm z-10 flex items-center justify-between px-4 md:px-6">
          {/* Botón menú hamburguesa solo en móvil */}
          <button
            className="md:hidden p-2 rounded hover:bg-gray-200 mr-2"
            onClick={() => setSidebarOpen(true)}
            aria-label="Abrir menú"
          >
            <Menu className="h-7 w-7 text-customGreen" />
          </button>
          <Link
            href="/"
            className="p-3 h-10 w-auto text-center bg-customYellow text-white text-sm hover:bg-customYellow/50 rounded-xl flex items-center justify-center transition-colors duration-300"
            title="Ir a inicio"
          >
            Ir a inicio
          </Link>
          <UserProfile />
        </header>
        <main className="flex-1 overflow-x-auto overflow-y-auto p-2 sm:p-4 md:p-6">
          {children}
        </main>
      </div>
    </div>
  );
};

export default MainLayout;
