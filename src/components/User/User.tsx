import React, { useEffect, useState } from "react";
import { FaRegUserCircle } from "react-icons/fa";

function getCookie(name: string) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop()?.split(";").shift();
}

const UserProfile: React.FC = () => {
  const [admin, setAdmin] = useState<{
    nombre: string;
    apellido: string;
    email: string;
  } | null>(null);
  const [tokenValue, setTokenValue] = useState<string | null>(null);

  useEffect(() => {
    const checkToken = () => {
      const token = getCookie("token");
      setTokenValue(token || null);
    };
    checkToken();
    const interval = setInterval(checkToken, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (tokenValue) {
      try {
        const payload = JSON.parse(atob(tokenValue.split(".")[1]));
        setAdmin({
          nombre: payload.nombre,
          apellido: payload.apellido,
          email: payload.email,
        });
      } catch {
        setAdmin(null);
      }
    } else {
      setAdmin(null);
    }
  }, [tokenValue]);

  return (
    <div className="flex justify-end items-center space-x-3 w-full">
      <div className="text-right hidden sm:block">
        <p className="text-xs font-medium text-gray-500">Usuario</p>
        <p className="text-sm font-semibold text-gray-800">
          {admin ? `${admin.nombre} ${admin.apellido}` : "Invitado"}
        </p>
      </div>
      <div className="h-10 w-10 rounded-full overflow-hidden">
        <FaRegUserCircle className="h-10 w-10 text-gray-300" />
      </div>
    </div>
  );
};

export default UserProfile;
