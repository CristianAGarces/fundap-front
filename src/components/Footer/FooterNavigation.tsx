import React from 'react';

interface NavigationLink {
  text: string;
  href: string;
}

interface NavigationGroup {
  title: string;
  links: NavigationLink[];
}

interface FooterNavigationProps {
  groups: NavigationGroup[];
}

const FooterNavigation: React.FC<FooterNavigationProps> = ({ groups }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {groups.map((group, index) => (
        <div key={index} className="space-y-4">
          <h3 className="text-[#FFD900] font-semibold text-lg">{group.title}</h3>
          <ul className="space-y-3">
            {group.links.map((link, idx) => (
              <li key={idx}>
                <a 
                  href={link.href} 
                  className="text-gray-300 hover:text-white transition-colors duration-300 block"
                >
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default FooterNavigation;