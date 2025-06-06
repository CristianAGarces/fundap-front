import React from "react";
import { LogOut } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Sidebar: React.FC = () => {
  const router = useRouter();

  const handleLogout = () => {
    // Eliminar la cookie del token
    document.cookie =
      "token=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC; secure; samesite=strict";
    router.push("/login");
  };

  return (
    <div className="w-[100px] md:w-[200px] bg-customGreen text-white flex flex-col h-full shadow-lg">
      <div className="p-4 flex justify-center">
        <Image
          src="/logo.png"
          alt="Logo"
          className="h-10 w-10 md:h-12 md:w-12 rounded-full"
          width={48}
          height={48}
        />
      </div>

      <div className="flex-1 overflow-y-auto ">
        <nav className="mt-8 mx-auto w-40 text-center bg-customGreen/55 p-4 border border-white/90 rounded-lg">
          <h2 className="text-lg font-semibold mb-4">Tipos de Documento:</h2>
          <ul className="space-y-4">
            <li>CC: Cedula de Ciudadanía</li>
            <li>CE: Cedula de Extranjería</li>
            <li>NIT: Número de Identificación Tributaria</li>
            <li>TI: Tarjeta de Identidad</li>
            <li>PP: Pasaporte</li>
            <li>RC: Registro Civil</li>
            <li>Otros</li>
          </ul>
        </nav>
      </div>

      <div className="p-4 border-t border-customGreen">
        <button
          className="w-full py-2 px-4 text-sm font-medium rounded hover:bg-customYellow transition-colors flex items-center justify-center md:justify-start"
          onClick={handleLogout}
        >
          <LogOut className="h-5 w-5 md:mr-2" />
          <span className="hidden md:inline">CERRAR SESIÓN</span>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
