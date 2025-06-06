import React from 'react';

interface LegalLink {
  text: string;
  href: string;
}

const legalLinks: LegalLink[] = [
  { text: 'Privacy Policy', href: '#privacy' },
  { text: 'Terms of Service', href: '#terms' },
  { text: 'Cookie Policy', href: '#cookies' },
  { text: 'Accessibility', href: '#accessibility' }
];

const FooterLegal: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <div className="pt-8 mt-8 border-t border-white/10 text-sm text-gray-400">
      <div className="flex flex-col md:flex-row justify-between items-center gap-4">
        <p>© {currentYear} FundapMacoe. All rights reserved.</p>
        
        <div className="flex flex-wrap gap-4 justify-center">
          {legalLinks.map((link, index) => (
            <React.Fragment key={index}>
              <a 
                href={link.href} 
                className="hover:text-[#82E61E] transition-colors duration-300"
              >
                {link.text}
              </a>
              {index < legalLinks.length - 1 && (
                <span className="text-gray-600">|</span>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FooterLegal;