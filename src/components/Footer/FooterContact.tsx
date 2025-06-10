import React from "react";
import { MapPin, Phone, Mail } from "lucide-react";

interface ContactItem {
  icon: React.ReactNode;
  content: React.ReactNode;
}

const contactItems: ContactItem[] = [
  {
    icon: <MapPin size={18} />,
    content: (
      <p>
        Carrera 10 #8-31, Barrio San Carlos, Candelaria, Valle.
        <br />
      </p>
    ),
  },
  {
    icon: <Phone size={18} />,
    content: (
      <a
        href="tel: +57 3177967846"
        className="hover:text-[#82E61E] transition-colors duration-300"
      >
        +57 3177967846.
      </a>
    ),
  },
  {
    icon: <Mail size={18} />,
    content: (
      <a
        href="mailto:contact@greenfoundation.org"
        className="hover:text-[#82E61E] transition-colors duration-300"
      >
        titocue@gmail.com
      </a>
    ),
  },
];

const FooterContact: React.FC = () => {
  return (
    <div className="space-y-4">
      <h3 className="text-[#FFD900] font-semibold text-lg">Contactanos</h3>
      <ul className="space-y-3">
        {contactItems.map((item, index) => (
          <li key={index} className="flex items-start gap-3">
            <div className="text-[#82E61E] mt-1">{item.icon}</div>
            <div className="text-gray-300">{item.content}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterContact;
