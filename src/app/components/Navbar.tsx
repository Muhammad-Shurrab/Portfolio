import { useState, useEffect } from "react";
import { Icon, Menu, X } from "lucide-react";
import logo from "./Images/logo.jpg"; // added logo import

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ["home", "about", "skills", "projects", "contact"];
      for (const section of sections.reverse()) {
        const el = document.getElementById(section);
        if (el && window.scrollY >= el.offsetTop - 100) {
          setActiveSection(section);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#FFFDF1]/95 backdrop-blur-md shadow-md shadow-[#562F00]/10"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick("#home");
          }}
          className="flex items-center gap-2"
        >
          <div className="w-11 h-11 rounded-full overflow-hidden">
            <img src={logo} alt="Logo" className="w-full h-full object-cover" />
          </div>

          <span
            className="text-[#562F00]"
            style={{
              fontFamily: "'Playfair Display', serif",
              fontWeight: 700,
              fontSize: "1.25rem",
            }}
          >
            Muhammad Shurrab
          </span>
        </a>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.replace("#", "");
            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className={`relative transition-colors duration-200 ${
                    isActive
                      ? "text-[#FF9644]"
                      : "text-[#562F00] hover:text-[#FF9644]"
                  }`}
                  style={{
                    fontFamily: "'Poppins', sans-serif",
                    fontWeight: 500,
                    fontSize: "0.95rem",
                  }}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#FF9644] rounded-full" />
                  )}
                </a>
              </li>
            );
          })}
        </ul>

        {/* CTA Button */}
        <a
          href="#contact"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick("#contact");
          }}
          className="hidden md:inline-flex items-center px-5 py-2 rounded-full bg-[#FF9644] text-[#FFFDF1] hover:bg-[#562F00] transition-colors duration-300"
          style={{
            fontFamily: "'Poppins', sans-serif",
            fontWeight: 600,
            fontSize: "0.9rem",
          }}
        >
          Hire Me
        </a>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-[#562F00] p-1"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {menuOpen && (
        <div className="md:hidden bg-[#FFFDF1] border-t border-[#FFCE99] px-6 py-6 flex flex-col gap-5 shadow-lg">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(link.href);
              }}
              className="text-[#562F00] hover:text-[#FF9644] transition-colors"
              style={{
                fontFamily: "'Poppins', sans-serif",
                fontWeight: 500,
                fontSize: "1.05rem",
              }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick("#contact");
            }}
            className="w-fit px-6 py-2.5 rounded-full bg-[#FF9644] text-[#FFFDF1] hover:bg-[#562F00] transition-colors"
            style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 600 }}
          >
            Hire Me
          </a>
        </div>
      )}
    </nav>
  );
}
