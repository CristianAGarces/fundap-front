"use client";
import Link from "next/link";
import Logo from "../../public/Logo.png";
import Image from "next/image";
import { useState, useRef } from "react";
import { FaRegUserCircle, FaBars, FaTimes } from "react-icons/fa";

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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const closeTimeout = useRef<NodeJS.Timeout | null>(null);

  const admin = getAdminFromToken();

  const handleLogout = () => {
    document.cookie =
      "token=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC; secure; samesite=strict";
    window.location.replace("/"); // Esto recarga completamente y elimina cualquier estado React residual
  };

  const handleMouseEnter = () => {
    if (closeTimeout.current) clearTimeout(closeTimeout.current);
    setOpenCursos(true);
  };
  const handleMouseLeave = () => {
    closeTimeout.current = setTimeout(() => setOpenCursos(false), 120);
  };

  // Para abrir/cerrar submenú en móvil
  const handleCursosClickMobile = () => setOpenCursos((v) => !v);

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
      {/* Botón hamburguesa solo en móvil */}
      <button
        className="md:hidden flex items-center justify-center text-customYellow text-3xl mr-4 z-50"
        onClick={() => setMobileMenuOpen((v) => !v)}
        aria-label="Abrir menú"
      >
        {mobileMenuOpen ? <FaTimes /> : <FaBars />}
      </button>
      {/* Menú de navegación */}
      <nav
        className={`${
          mobileMenuOpen
            ? "fixed top-0 left-0 w-3/4 h-full bg-customGreen text-white flex flex-col items-start pt-24 px-6 z-40 transition-transform duration-300 md:static md:w-auto md:h-auto md:bg-transparent md:flex-row md:items-center md:pt-0 md:px-0"
            : "hidden md:flex md:items-center md:justify-center"
        }`}
      >
        <ul className="flex flex-col md:flex-row md:space-x-10 text-lg w-full">
          <li className="hover:text-customYellow py-2 md:py-0">
            <Link
              href="/"
              title="Inicio"
              onClick={() => setMobileMenuOpen(false)}
            >
              Inicio
            </Link>
          </li>
          <li
            className="relative hover:text-customYellow cursor-pointer py-2 md:py-0"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            {/* Desktop: hover, Mobile: click */}
            <div
              className="flex items-center gap-1 select-none"
              onClick={() => {
                if (window.innerWidth < 768) handleCursosClickMobile();
              }}
            >
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
              className={`md:absolute md:left-0 md:mt-2 md:w-40 bg-customGreen text-white rounded shadow-lg transition-all duration-200 origin-top md:scale-95 md:opacity-0 md:pointer-events-none
                ${
                  openCursos && !mobileMenuOpen
                    ? "md:scale-100 md:opacity-100 md:pointer-events-auto"
                    : ""
                }
                ${mobileMenuOpen ? "w-full block md:w-40 md:absolute" : ""}
              `}
              style={
                mobileMenuOpen
                  ? {
                      position: "static",
                      overflow: "hidden",
                      maxHeight: openCursos ? "200px" : "0px",
                      transition:
                        "max-height 0.3s cubic-bezier(0.4,0,0.2,1), opacity 0.3s",
                      opacity: openCursos ? 1 : 0,
                    }
                  : undefined
              }
            >
              <li className="px-4 py-2 hover:bg-customYellow hover:text-customGreen transition-colors duration-150 rounded-t">
                <Link
                  href="/Pages/Cursos/Programas"
                  title="Cursos"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Programas
                </Link>
              </li>
              <li className="px-4 py-2 hover:bg-customYellow hover:text-customGreen transition-colors duration-150 rounded-b">
                <Link
                  href="/Pages/Cursos/Proyectos"
                  title="Proyectos"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Proyectos
                </Link>
              </li>
            </ul>
          </li>
          <li className="hover:text-customYellow py-2 md:py-0">
            <Link
              href="/Pages/valores"
              title="Valores"
              onClick={() => setMobileMenuOpen(false)}
            >
              Nuestros valores
            </Link>
          </li>
          <li className="hover:text-customYellow py-2 md:py-0">
            <Link
              href="/Pages/aboutUs"
              title="About-us"
              onClick={() => setMobileMenuOpen(false)}
            >
              Acerca de nosotros
            </Link>
          </li>
          <li className="hover:text-customYellow py-2 md:py-0">
            <Link
              href="/Pages/contacto"
              title="Contacto"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contacto
            </Link>
          </li>
          <li className="hover:text-customYellow py-2 md:py-0">
            <Link
              href="/Pages/inscripciones"
              title="sedes"
              onClick={() => setMobileMenuOpen(false)}
            >
              Inscripciones
            </Link>
          </li>
          {/* Botón iniciar sesión SOLO en móvil */}
          {!admin && (
            <li className="block md:hidden w-full mt-2">
              <Link
                href="/login"
                className="bg-customYellow text-white px-4 py-2 rounded hover:bg-customYellow/65 text-base font-bold w-full block text-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                Iniciar seccion
              </Link>
            </li>
          )}
        </ul>
      </nav>
      {/* Menú usuario admin o botón iniciar sesión en desktop */}
      <div className="hidden md:flex md:items-center md:gap-4">
        {/* Si es admin, mostrar menú de admin */}
        {admin ? (
          <div className="relative group">
            <button
              onClick={() => setOpenUserMenu((v) => !v)}
              className="flex items-center gap-2 bg-customYellow text-customGreen px-4 py-2 rounded hover:bg-customYellow/80 transition-colors duration-150"
              aria-label="Menú de usuario"
            >
              <FaRegUserCircle className="text-2xl" />
              <span className="font-semibold">{admin.nombre}</span>
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
            {openUserMenu && (
              <div className="absolute right-0 top-full mt-2 w-48 bg-customGreen text-white rounded shadow-lg overflow-hidden z-50">
                <Link
                  href="/admin"
                  className="block px-4 py-2 hover:bg-customYellow hover:text-customGreen transition-colors duration-150"
                  onClick={() => setOpenUserMenu(false)}
                >
                  Panel de admin
                </Link>
                <button
                  onClick={handleLogout}
                  className="w-full text-left px-4 py-2 hover:bg-red-600 transition-colors duration-150"
                  aria-label="Cerrar sesión"
                >
                  Cerrar sesión
                </button>
              </div>
            )}
          </div>
        ) : (
          <Link
            href="/login"
            className="bg-customYellow text-white px-4 py-2 rounded hover:bg-customYellow/65 transition-colors duration-150"
            onClick={() => setMobileMenuOpen(false)}
          >
            Iniciar sesión
          </Link>
        )}
      </div>
    </header>
  );
};

export default Menu;
