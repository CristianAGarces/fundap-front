import React from "react";
import Image from "next/image";

interface FooterLogoProps {
  name?: string;
}

const FooterLogo: React.FC<FooterLogoProps> = ({ name = "FundapMacoe" }) => {
  return (
    <div className="flex items-center gap-2">
      <Image
        alt="Logo FundapMacoe"
        src="/logo.png"
        width={25}
        height={25}
        className="rounded-full"
      />
      <span className="font-bold text-xl text-white">{name}</span>
    </div>
  );
};

export default FooterLogo;
