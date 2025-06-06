import React from "react";
import { Facebook, Twitter, Instagram, Linkedin, Youtube } from "lucide-react";

interface SocialLink {
  icon: React.ReactElement;
  href: string;
  label: string;
}

const socialLinks: SocialLink[] = [
  {
    icon: <Facebook />,
    href: "#facebook",
    label: "Facebook",
  },
  {
    icon: <Twitter />,
    href: "#twitter",
    label: "Twitter",
  },
  {
    icon: <Instagram />,
    href: "#instagram",
    label: "Instagram",
  },
  {
    icon: <Linkedin />,
    href: "#linkedin",
    label: "LinkedIn",
  },
  {
    icon: <Youtube />,
    href: "#youtube",
    label: "YouTube",
  },
];

const FooterSocial: React.FC = () => {
  return (
    <div className="space-y-4">
      <h3 className="text-[#FFD900] font-semibold text-lg">Siguenos</h3>
      <div className="flex gap-4 flex-wrap">
        {socialLinks.map((link, index) => (
          <a
            key={index}
            href={link.href}
            aria-label={link.label}
            className="bg-black hover:bg-[#82E61E] text-white hover:text-black p-2 rounded-full transition-all duration-300 transform hover:scale-110"
          >
            {/* Renderiza el icono directamente sin cloneElement, pasando className al crear el icono */}
            {React.createElement(link.icon.type, {
              className: "w-5 h-5 transition-colors duration-300",
            })}
          </a>
        ))}
      </div>
    </div>
  );
};

export default FooterSocial;
