import React from "react";
import Image from "next/image";

const LogoSection: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center py-8 md:py-0 md:w-1/2 text-white">
      <div className="rounded-full bg-yellow-200 p-8 w-48 h-48 flex items-center justify-center mb-6 transition-transform duration-500 hover:scale-105">
        <div className="relative">
          <Image
            src="/logo.png"
            alt="Logo"
            width={128}
            height={128}
            className="w-32 h-32 object-cover rounded-full"
          />
        </div>
      </div>
      <h1 className="text-4xl font-bold text-center transition-all duration-300 hover:tracking-wider">
        FundapMacoe
      </h1>
    </div>
  );
};

export default LogoSection;
