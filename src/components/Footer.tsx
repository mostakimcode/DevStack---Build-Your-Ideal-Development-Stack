
import LogoMark from "../assets/logo-text.png";

const footerLinks: Record<string, string[]> = {
  Product: ["Features", "Pricing", "Changelog"],
  Company: ["About", "Careers", "Contact"],
  Legal: ["Privacy", "Terms"],
};

const Footer = () => {
  return (
    <footer className="bg-base-200 mt-20">
      <div className="md:hidden max-w-7xl mx-auto px-4 py-10 flex flex-col items-center text-center gap-4">
        <img src={LogoMark} alt="Dev Stack" className="h-8 w-auto object-contain" />

        <p className="text-sm text-base-content/60 max-w-xs">
          Curated tools, technologies, and resources for developers
building modern software.
        </p>

        <div className="flex items-center gap-4 font-semibold text-sm text-base-content/70">
          <span className="cursor-pointer hover:text-primary">GitHub</span>
          
          <span className="cursor-pointer hover:text-primary">Twitter</span>
          
          <span className="cursor-pointer hover:text-primary">LinkedIn</span>
        </div>
      </div>

      <div className="hidden max-w-7xl lg:max-w-[85%] md:max-w-[90%] mx-auto px-4 py-12 md:grid grid-cols-1 md:grid-cols-4 gap-10">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <img src={LogoMark} alt="DevStack" className="h-8 w-auto object-contain" />
            
          </div>
          <p className="text-sm text-base-content/60 mb-4">
           Curated tools, technologies, and resources for developers
building modern software.
          </p>
          <div className="flex items-center gap-4 font-semibold text-sm text-base-content/70">
          <span className="cursor-pointer hover:text-primary">GitHub</span>
          
          <span className="cursor-pointer hover:text-primary">Twitter</span>
          
          <span className="cursor-pointer hover:text-primary">LinkedIn</span>
        </div>
        </div>

        {Object.entries(footerLinks).map(([group, links]) => (
          <div key={group}>
            <h4 className="font-bold mb-3">{group}</h4>
            <ul className="flex flex-col gap-2 text-sm text-base-content/60">
              {links.map((link) => (
              <li key={link} className="cursor-pointer hover:text-primary">
                  {link}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="border-t border-base-300 py-8">
        <div className="max-w-[97%] lg:max-w-[85%] md:max-w-[90%] mx-auto px-4 flex flex-col sm:flex-row justify-between items-center gap-2 text-sm text-base-content/60">
          <p>© {new Date().getFullYear()} DevStack. All rights reserved.</p>
          <div className="flex gap-4">
            <span className="cursor-pointer hover:text-primary">Privacy</span>
            <span className="cursor-pointer hover:text-primary">Terms</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;