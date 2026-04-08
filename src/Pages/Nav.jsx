import React, { useState, useEffect } from "react";
import { ShoppingBag, Menu as MenuIcon, X, Search } from "lucide-react";
import { NavLink, Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Cakes", path: "/cakes" },
    { name: "Menu", path: "/menu" },
    { name: "Garlic Breads", path: "/garlic-breads" },
    { name: "Berlines", path: "/berlines" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-700 bg-[#FAF9F6] border-b border-black/10 ${scrolled ? "py-3 shadow-lg" : "py-5"
          }`}
      >
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex justify-between items-center">

            {/* LEFT: SEARCH ICON */}
            <div className="hidden lg:block w-1/3">
              <button className="text-black/60 hover:text-black transition-colors">
                <Search size={20} />
              </button>
            </div>

            {/* CENTER: LOGO WITH IMAGE */}
            <Link to="/" className="flex items-center justify-center gap-3 lg:w-1/3">
              {/* Logo Image - Replace the src with your actual logo path */}
              <img
                src="/logo.png" // Change this to your logo path
                alt="AURA Logo"
                className="h-12 w-auto object-contain"
                onError={(e) => {
                  // Fallback if image doesn't exist
                  e.target.style.display = 'none';
                }}
              />
              <img src="/Aura.avif" alt="AURA Logo" className="h-12 w-auto object-contain" />
              <div className="flex flex-col items-center">
                <span className="font-serif text-3xl md:text-4xl tracking-[0.2em] text-black">
                  AURA
                </span>
                <span className="text-[8px] uppercase tracking-[0.5em] text-black/60 font-bold">
                  Artisan Brewing
                </span>
              </div>
            </Link>

            {/* RIGHT: DESKTOP NAV & CART */}
            <div className="hidden lg:flex items-center justify-end  space-x-10 lg:w-1/3">
              {navLinks.slice(0, 4).map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  className={({ isActive }) =>
                    `text-[11px] uppercase tracking-[0.2em] font-bold transition-all duration-300 relative group ${isActive ? "text-black" : "text-black/60 hover:text-black"
                    }`
                  }
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-0 h-[1px] bg-black transition-all duration-500 group-hover:w-full"></span>
                </NavLink>
              ))}

              <button className="relative group p-2">
                <ShoppingBag size={22} className="text-black group-hover:text-black/60 transition-colors" />
                <span className="absolute -top-1 -right-1 bg-black text-[#FAF9F6] text-[9px] font-black w-4 h-4 rounded-full flex items-center justify-center">
                  2
                </span>
              </button>
            </div>

            {/* MOBILE BUTTON */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden text-black p-2"
            >
              {isMenuOpen ? <X size={30} strokeWidth={1} /> : <MenuIcon size={30} strokeWidth={1} />}
            </button>
          </div>
        </div>
      </nav>

      {/* FULL SCREEN MOBILE OVERLAY */}
      <div
        className={`fixed inset-0 z-[90] bg-[#FAF9F6] flex flex-col items-center justify-center transition-all duration-700 ease-in-out ${isMenuOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
          }`}
      >
        <div className="flex flex-col items-center space-y-8 mt-15">
          {navLinks.map((link, i) => (
            <NavLink
              key={link.name}
              to={link.path}
              onClick={() => setIsMenuOpen(false)}
              style={{ transitionDelay: `${i * 100}ms` }}
              className={({ isActive }) =>
                `text-4xl font-serif transition-transform duration-500 ${isMenuOpen ? "translate-y-0" : "translate-y-10"
                } ${isActive ? "text-black italic" : "text-black/70"}`
              }
            >
              {link.name}
            </NavLink>
          ))}

          <div className="pt-10">
            <button onClick={() => setIsMenuOpen(false)} className="bg-black text-[#FAF9F6] px-12 py-4 rounded-full font-bold uppercase tracking-widest text-xs hover:bg-black/80 transition-colors">
              Order Online
            </button>
          </div>
        </div>

        {/* Background decorative text for Mobile */}
        <div className="absolute bottom-10 text-black/5 text-8xl font-serif select-none">
          AURA
        </div>
      </div>
    </>
  );
};

export default Navbar;