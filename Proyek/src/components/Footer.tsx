import { useState } from 'react';
import { ChevronDown, Globe, Instagram } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const [openDropdowns, setOpenDropdowns] = useState<Record<string, boolean>>({});

  const toggleDropdown = (id: string) => {
    setOpenDropdowns(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const siteLinks = [
    { label: "Home", items: ["Home"] },
    { label: "Karya Tulis Ilmiah", items: ["Adiwiyata", "Pariwisata", "Retro"] },
    { label: "Quotes", items: ["Quotes"] }
  ];

  const companyLinks = [
    { image: "Instagram", label: "@xii.fearlessmiepra", href: "Tiktok.com" },
    { image: "Twitter",label: "@fearless.miepra", href: "instagram.com" },
  ];

  const ourSites = [
    { label: "Home", href: "/" },
    { label: "Adiwiyata", href: "/adiwiyata" },
    { label: "Pariwisata", href: "/pariwisata" },
    { label: "Retro", href: "/retro" },
    { label: "Quotes", href: "/quotes" },
    { label: "Inbox", href: "/kritik-saran" }
  ];

  return (
    <footer className="bg-gray-900 text-gray-300 pt-12 pb-8 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* About IsItWP */}
        <div>
          <h3 className="text-white font-semibold mb-4">Angkasa</h3>
          <p className="mb-6 text-sm">
            Angkasa is a platform that provides insightful articles and resources about various topics including education, technology, and lifestyle. Our mission is to empower readers with knowledge and inspiration.
          </p>
          <button className="flex items-center gap-2 bg-gray-800 px-4 py-2 rounded text-sm hover:bg-gray-700 transition">
            <Globe size={16} />
            Indonesia
          </button>
        </div>

        {/* Site Links */}
        <div>
          <h3 className="text-white font-semibold mb-4">Site Links</h3>
          {siteLinks.map((link, index) => (
            <div key={index} className="mb-3">
              <button
                onClick={() => toggleDropdown(link.label)}
                className="flex justify-between items-center w-full bg-gray-800 px-4 py-2 rounded text-sm hover:bg-gray-700 transition"
              >
                <span>-- {link.label} --</span>
                <ChevronDown
                  size={16}
                  className={`transition-transform ${openDropdowns[link.label] ? 'rotate-180' : ''}`}
                />
              </button>
              {openDropdowns[link.label] && (
                <ul className="mt-2 space-y-1 pl-4 text-xs">
                  {link.items.map((item, i) => (
                    <li key={i}>
                      <Link to="#" className="hover:text-white transition">
                        {item}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>

        {/* Media Sosial kita */}
        <div>
          <h3 className="text-white font-semibold mb-4">Media Sosial kita</h3>
          <ul className="space-y-2 text-sm">
            {companyLinks.map((link, index) => (
              <li key={index}>
                <a href={link.href} className="hover:text-white transition flex items-center gap-2">
                  <Instagram/>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Our Sites */}
        <div>
          <h3 className="text-white font-semibold mb-4">Menu Kita</h3>
          <ul className="space-y-2 text-sm">
            {ourSites.map((site, index) => (
              <li key={index}>
                <Link
                  to={site.href}
                  rel="noopener noreferrer"
                  className="hover:text-white transition">
                  {site.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="mt-12 pt-6 border-t border-gray-800 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} Angkasa. XII-Fearless bagian dari SMA Negeri 1 Turen.
      </div>
    </footer>
  );
};

export default Footer;