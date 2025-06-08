import React from "react";
import Sidebar from "@/components/Sidebar/Sidebar";
import UserProfile from "@/components/User/User";
import Link from "next/link";

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className="flex h-screen w-full overflow-hidden bg-gray-50">
      <Sidebar />
      <div className="flex flex-col flex-1 overflow-hidden">
        <header className="h-16 bg-white shadow-sm z-10">
          <div className="flex items-center justify-between h-full px-6">
            <Link
              href="/"
              className="size-40 bg-customYellow text-white text-xl hover:bg-customYellow/50 rounded-full flex items-center justify-center transition-colors duration-300"
              title="Ir a inicio"
            >
              Ir a inicio
            </Link>
            <UserProfile />
          </div>
        </header>
        <main className="flex-1 overflow-x-auto overflow-y-auto p-6">
          {children}
        </main>
      </div>
    </div>
  );
};

export default MainLayout;
