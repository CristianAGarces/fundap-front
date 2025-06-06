"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminConfirmPage() {
  const [status, setStatus] = useState("Verificando...");
  const router = useRouter();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const token = params.get("token");
    if (!token) {
      setStatus("Token de confirmación no válido.");
      return;
    }
    fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/admin/confirm-access/${token}`
    )
      .then(async (res) => {
        const data = await res.json();
        if (res.ok && data.token) {
          document.cookie = `token=${data.token}; path=/; secure; samesite=strict`;
          setStatus("Acceso confirmado. Redirigiendo...");
          setTimeout(() => router.push("/admin-zone"), 1500);
        } else {
          setStatus(data.detail || data.mensaje || "Error al confirmar acceso");
        }
      })
      .catch(() => setStatus("Error de red al confirmar acceso"));
  }, [router]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg text-center">
        <h2 className="text-2xl font-bold mb-4 text-green-600">
          Confirmación de acceso
        </h2>
        <p className="mb-6 text-gray-700">
          {status === "Verificando..."
            ? "Estamos validando tu acceso. Por favor espera unos segundos."
            : status === "Acceso confirmado. Redirigiendo..."
            ? "¡Acceso confirmado! Serás redirigido automáticamente a la zona de administración."
            : status}
        </p>
        {status === "Verificando..." && (
          <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-green-600 mx-auto mb-4"></div>
        )}
        {status === "Acceso confirmado. Redirigiendo..." && (
          <div className="text-green-600 font-bold">✔️</div>
        )}
        {status !== "Verificando..." &&
          status !== "Acceso confirmado. Redirigiendo..." && (
            <div className="text-red-600 font-bold">❌</div>
          )}
      </div>
    </div>
  );
}
