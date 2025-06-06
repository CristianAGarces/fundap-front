import React from "react";
import FooterLogo from "@/components/Footer/FooterLogo";
import FooterNavigation from "@/components/Footer/FooterNavigation";
import FooterSocial from "@/components/Footer/FooterSocial";
import FooterContact from "@/components/Footer/FooterContact";
import FooterLegal from "@/components/Footer/FooterLegal";
import FooterWave from "@/components/Footer/FooterWave";

const Footer: React.FC = () => {
  const navigationGroups = [
    {
      title: "Acerca de Nosotros",
      links: [
        { text: "Nuestra mision", href: "#mission" },
        { text: "Nuestro equipo", href: "#team" },
        { text: "Nuestra historia", href: "#history" },
        { text: "Reporte anual", href: "#reports" },
      ],
    },
    {
      title: "Nuestro trabajo",
      links: [
        { text: "Programas", href: "#programs" },
        { text: "Iniciativas", href: "#initiatives" },
        { text: "Historias de exito", href: "#stories" },
        { text: "Reporte de impacto", href: "#impact" },
      ],
    },
    {
      title: "Apoyo y Participación",
      links: [
        { text: "Dona", href: "#donate" },
        { text: "Voluntarios", href: "#volunteer" },
        { text: "Eventos", href: "#events" },
        { text: "Fundraise", href: "#fundraise" },
      ],
    },
  ];

  return (
    <footer className="bg-black text-white">
      <FooterWave />

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="space-y-6">
            <FooterLogo />
            <p className="text-gray-300 max-w-md">
              FundapMacoe es una organización dedicada a la promoción y defensa
              de los derechos de las mujeres afrodescendientes y otras etnias en
              Colombia. Nuestro objetivo es empoderar a estas comunidades y
              fomentar su desarrollo integral.
            </p>
            <FooterSocial />
          </div>

          <div className="lg:col-span-2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <FooterNavigation groups={navigationGroups} />
              </div>

              <div className="space-y-12">
                <FooterContact />
              </div>
            </div>
          </div>
        </div>

        <FooterLegal />
      </div>
    </footer>
  );
};

export default Footer;
