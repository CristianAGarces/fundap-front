"use client";
import Link from "next/link";
import Logo from "../../public/Logo.png";
import Image from "next/image";
import { useState, useRef } from "react";
import { FaRegUserCircle } from "react-icons/fa";

function getCookie(name: string) {
  if (typeof document === "undefined") return null;
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop()?.split(";").shift();
  return null;
}

const getAdminFromToken = () => {
  const token = getCookie("token");
  if (!token) return null;
  try {
    const payload = JSON.parse(atob(token.split(".")[1]));
    return {
      nombre: payload.nombre,
      apellido: payload.apellido,
      email: payload.email,
    };
  } catch {
    return null;
  }
};

const Menu = () => {
  const [openCursos, setOpenCursos] = useState(false);
  const [openUserMenu, setOpenUserMenu] = useState(false);
  const closeTimeout = useRef<NodeJS.Timeout | null>(null);

  const admin = getAdminFromToken();

  const handleLogout = () => {
    document.cookie =
      "token=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC; secure; samesite=strict";
    window.location.replace("/login"); // Esto recarga completamente y elimina cualquier estado React residual
  };

  const handleMouseEnter = () => {
    if (closeTimeout.current) clearTimeout(closeTimeout.current);
    setOpenCursos(true);
  };
  const handleMouseLeave = () => {
    closeTimeout.current = setTimeout(() => setOpenCursos(false), 120);
  };

  return (
    <header className="flex w-full z-40 h-16 fixed items-center justify-between bg-customGreen text-white p-2 shadow-md">
      <div
        className="relative flex flex-col items-center z-30"
        style={{ top: "1.5rem" }}
      >
        <Image
          src={Logo}
          alt="Background Logo"
          width={90}
          height={90}
          priority
          className="object-contain drop-shadow-lg"
        />
        <div className="text-2xl font-bold mt-1 text-customYellow">
          FundapMacoe
        </div>
      </div>
      <div className="flex items-center justify-center">
        <ul className="flex space-x-10 text-lg">
          <li className="hover:text-customYellow">
            <Link href="/" title="Inicio">
              Inicio
            </Link>
          </li>
          <li
            className="relative hover:text-customYellow cursor-pointer"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <div className="flex items-center gap-1 select-none">
              Cursos
              <svg
                className={`w-4 h-4 transition-transform duration-200 ${
                  openCursos ? "rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
            <ul
              className={`absolute left-0 mt-2 w-40 bg-customGreen text-white rounded shadow-lg transition-all duration-200 origin-top scale-95 opacity-0 pointer-events-none ${
                openCursos ? "scale-100 opacity-100 pointer-events-auto" : ""
              }`}
            >
              <li className="px-4 py-2 hover:bg-customYellow hover:text-customGreen transition-colors duration-150 rounded-t">
                <Link href="/Pages/Cursos/Programas" title="Cursos">
                  Programas
                </Link>
              </li>
              <li className="px-4 py-2 hover:bg-customYellow hover:text-customGreen transition-colors duration-150 rounded-b">
                <Link href="/Pages/Cursos/Proyectos" title="Proyectos">
                  Proyectos
                </Link>
              </li>
            </ul>
          </li>
          <li className="hover:text-customYellow">
            <Link href="/Pages/valores" title="Valores">
              Nuestros valores
            </Link>
          </li>
          <li className="hover:text-customYellow">
            <Link href="/Pages/aboutUs" title="About-us">
              Acerca de nosotros
            </Link>
          </li>
          <li className="hover:text-customYellow">
            <Link href="/Pages/contacto" title="Contacto">
              Contacto
            </Link>
          </li>
          <li className="hover:text-customYellow">
            <Link href="/Pages/inscripciones" title="sedes">
              Inscripciones
            </Link>
          </li>
        </ul>
      </div>
      {admin ? (
        <div className="relative mr-10">
          <button
            className="flex items-center gap-2 bg-customYellow text-customGreen px-3 py-2 rounded font-bold hover:bg-customYellow/80 focus:outline-none"
            onClick={() => setOpenUserMenu((v) => !v)}
            onBlur={() => setTimeout(() => setOpenUserMenu(false), 150)}
          >
            <FaRegUserCircle className="w-6 h-6" />
            <span className="hidden md:inline">{admin?.nombre}</span>
            <svg
              className={`w-4 h-4 transition-transform duration-200 ${
                openUserMenu ? "rotate-180" : ""
              }`}
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
          <ul
            className={`absolute right-0 mt-2 w-44 bg-white text-customGreen rounded shadow-lg transition-all duration-200 origin-top scale-95 opacity-0 pointer-events-none z-50 ${
              openUserMenu ? "scale-100 opacity-100 pointer-events-auto" : ""
            }`}
          >
            <li>
              <Link
                href="/admin-zone"
                className="block px-4 py-2 hover:bg-customGreen hover:text-white rounded-t"
                onClick={() => setOpenUserMenu(false)}
              >
                Ir a tablero
              </Link>
            </li>
            <li>
              <button
                className="block w-full text-left px-4 py-2 hover:bg-red-100 hover:text-red-600 rounded-b"
                onClick={handleLogout}
              >
                Cerrar sesión
              </button>
            </li>
          </ul>
        </div>
      ) : (
        <Link
          href="/login"
          className="bg-customYellow text-white px-2 py-2 rounded hover:bg-customYellow/65 text-sm justify-end w-28 mr-10 font-bold"
        >
          Iniciar seccion
        </Link>
      )}
    </header>
  );
};

export default Menu;
