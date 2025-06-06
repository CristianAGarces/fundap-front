import React from "react";
import LogoSection from "@/components/Login/LogoSection";
import LoginForm from "@/components/Login/LoginForm";

const LoginPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-green-500 via-lime-400 to-yellow-300 flex flex-col md:flex-row items-center justify-center p-4">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-center max-w-6xl">
        <LogoSection />
        <LoginForm />
      </div>
    </div>
  );
};

export default LoginPage;
