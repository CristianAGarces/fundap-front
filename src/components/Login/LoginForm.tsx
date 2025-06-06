"use client";
import React, { useState } from "react";
import Input from "@/components/Ui/Input";
import Button from "@/components/Ui/Button";
import Link from "next/link";
import { User, Lock } from "lucide-react";

const LoginForm: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    // Enviar petición al backend para iniciar el flujo de validación por correo
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/admin/login`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email, password }),
        }
      );
      const data = await response.json();
      if (!response.ok) {
        const mensajeError =
          data.detail ||
          data.mensaje ||
          "Ocurrió un error inesperado. Intenta nuevamente o contacta soporte.";
        setError(mensajeError);
        return;
      }
      alert(
        data.mensaje ||
          "Se ha enviado un correo de confirmación. Por favor revisa tu email."
      );
      // Opcional: redirigir o limpiar campos
    } catch {
      setError("Error de red o del servidor");
    }
  };

  return (
    <div className="md:w-1/2 w-full max-w-md">
      <div className="bg-white rounded-3xl shadow-xl p-8 md:p-10 transition-all duration-300 hover:shadow-2xl">
        <h2 className="text-3xl font-bold mb-2 text-gray-800">Bienvenido a</h2>
        <h3 className="text-2xl font-bold mb-6 text-gray-800">FUNDAPMACOE</h3>

        <h4 className="text-xl font-semibold mb-6 text-gray-700">
          Inicia sesión
        </h4>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              Ingresa tu correo electrónico
            </label>
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Correo electrónico"
              icon={<User size={18} className="text-gray-500" />}
              required
            />
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              Ingresa tu contraseña
            </label>
            <Input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Contraseña"
              icon={<Lock size={18} className="text-gray-500" />}
              required
            />
          </div>
          <div className="pt-2 flex justify-between items-center">
            <Button type="submit">Inicia sesión</Button>
            <p>
              {" "}
              Volver al inicio{" "}
              <Link className="text-customGreen" href="/">
                Aqui
              </Link>
            </p>
          </div>

          {error && <p className="text-red-500 text-center mt-2">{error}</p>}
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
