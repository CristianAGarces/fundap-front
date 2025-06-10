"use client";
import React, { useEffect, useState } from "react";
import MainLayout from "@/components/Layout/MainLayout";
import DataTable from "@/components/Data/DataTable";
import { User } from "../../../types/type";
import { useRouter } from "next/navigation";
import AdminZoneGuard from "@/lib/AdminZoneGuard";

export default function AdminPage() {
  const [users, setUsers] = useState<User[]>([]);
  const [showAuthError, setShowAuthError] = useState(false);
  const router = useRouter();

  const columns = [
    { id: "nombre", label: "Nombre", width: "120px" },
    { id: "apellido", label: "Apellido", width: "120px" },
    { id: "email", label: "Email", width: "180px" },
    { id: "telefono", label: "Teléfono", width: "120px" },
    { id: "mensaje", label: "Mensaje", width: "200px" },
    { id: "type_document", label: "Tipo Doc.", width: "100px" },
    { id: "numero_documento", label: "N° Documento", width: "150px" },
  ];

  useEffect(() => {
    let ignore = false;
    function getCookie(name: string) {
      const value = `; ${document.cookie}`;
      const parts = value.split(`; ${name}=`);
      if (parts.length === 2) return parts.pop()?.split(";").shift();
    }
    const token = getCookie("token");
    if (!token) {
      setShowAuthError(true);
      return;
    }
    const fetchUser = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}/interesadas/`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
            cache: "no-store",
          }
        );
        if (response.status === 401 || response.status === 403) {
          setShowAuthError(true);
          return;
        }
        if (!response.ok) {
          throw new Error("Failed to fetch user data");
        }
        const data = await response.json();
        if (!ignore) setUsers(data);
      } catch (error) {
        setShowAuthError(true);
        console.error("Error fetching user data:", error);
      }
    };
    fetchUser();
    return () => {
      ignore = true;
    };
  }, [router]);

  if (showAuthError) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-2">
        <div className="bg-white p-4 sm:p-8 rounded-lg shadow-lg text-center w-full max-w-md">
          <h2 className="text-2xl font-bold mb-4 text-red-600">
            Acceso restringido
          </h2>
          <p className="mb-6 text-gray-700">
            Debes iniciar sesión como administrador para ver esta zona.
          </p>
          <button
            className="bg-customGreen text-white px-6 py-2 rounded font-bold hover:bg-customYellow hover:text-black transition w-full"
            onClick={() => router.push("/")}
          >
            Volver al inicio
          </button>
        </div>
      </div>
    );
  }

  return (
    <AdminZoneGuard>
      <MainLayout>
        <div className="w-full overflow-x-auto">
          <div className="min-w-[700px]">
            <DataTable columns={columns} data={users} />
          </div>
        </div>
      </MainLayout>
    </AdminZoneGuard>
  );
}
