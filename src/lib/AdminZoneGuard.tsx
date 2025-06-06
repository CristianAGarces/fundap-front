// Este archivo protege la zona de admin validando la existencia del token JWT en la cookie
import { useEffect } from "react";
import { useRouter } from "next/navigation";

function getCookie(name: string) {
  if (typeof document === "undefined") return null;
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop()?.split(";").shift();
  return null;
}

export default function AdminZoneGuard({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  useEffect(() => {
    const token = getCookie("token");
    if (!token) {
      router.replace("/login");
    }
  }, [router]);
  return <>{children}</>;
}
