import {
  Github,
  Linkedin,
  Twitter,
  Heart,
  ArrowUp,
  Facebook,
} from "lucide-react";
import logo from "./Images/logo.jpg";
const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const socials = [
  {
    icon: Github,
    href: "https://github.com/Muhammad-Shurrab",
    label: "GitHub",
  },
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/in/muhammad-shurrab",
    label: "LinkedIn",
  },
  {
    icon: Facebook,
    href: "https://www.facebook.com/doode.shurrab/",
    label: "Facebook",
  },
];

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    e.preventDefault();
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-[#3A1E00] border-t border-[#FFCE99]/10 relative">
      {/* Back to top */}
      <button
        onClick={scrollToTop}
        className="absolute -top-5 left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-[#FF9644] text-[#FFFDF1] flex items-center justify-center hover:bg-[#FFCE99] hover:text-[#562F00] transition-colors shadow-lg"
        aria-label="Back to top"
      >
        <ArrowUp size={18} />
      </button>

      <div className="max-w-6xl mx-auto px-6 pt-14 pb-8">
        {/* Main row */}
        <div className="grid md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-full bg-[#FF9644] flex items-center justify-center">
                <span
                  className="text-[#FFFDF1]"
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontWeight: 700,
                    fontSize: "1.1rem",
                  }}
                >
                  <div className="w-9 h-9 rounded-full overflow-hidden">
                    <img
                      src={logo}
                      alt="Logo"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </span>
              </div>
              <span
                className="text-[#FFFDF1]"
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontWeight: 700,
                  fontSize: "1.25rem",
                }}
              >
                Muhammad Shurrab
              </span>
            </div>
            <p
              className="text-[#FFFDF1]/50"
              style={{
                fontFamily: "'Poppins', sans-serif",
                fontWeight: 400,
                fontSize: "0.88rem",
                lineHeight: 1.8,
              }}
            >
              Full-Stack Developer crafting beautiful and performant web
              experiences. Available for freelance work.
            </p>
            <div className="flex gap-3">
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  aria-label={label}
                  className="w-9 h-9 rounded-full border border-[#FFCE99]/15 flex items-center justify-center text-[#FFFDF1]/50 hover:bg-[#FF9644] hover:border-[#FF9644] hover:text-[#FFFDF1] transition-all duration-300"
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-4">
            <h4
              className="text-[#FFCE99]"
              style={{
                fontFamily: "'Poppins', sans-serif",
                fontWeight: 600,
                fontSize: "0.95rem",
                letterSpacing: "0.05em",
              }}
            >
              Quick Links
            </h4>
            <ul className="flex flex-col gap-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    target="_blank"
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="text-[#FFFDF1]/50 hover:text-[#FF9644] transition-colors"
                    style={{
                      fontFamily: "'Poppins', sans-serif",
                      fontWeight: 400,
                      fontSize: "0.88rem",
                    }}
                  >
                    → {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="flex flex-col gap-4">
            <h4
              className="text-[#FFCE99]"
              style={{
                fontFamily: "'Poppins', sans-serif",
                fontWeight: 600,
                fontSize: "0.95rem",
                letterSpacing: "0.05em",
              }}
            >
              Services
            </h4>
            <ul className="flex flex-col gap-2.5">
              {[
                "Web Development",
                "UI/UX Design",
                "API Development",
                "Code Review",
                "Consulting",
              ].map((service) => (
                <li key={service}>
                  <span
                    className="text-[#FFFDF1]/50"
                    style={{
                      fontFamily: "'Poppins', sans-serif",
                      fontWeight: 400,
                      fontSize: "0.88rem",
                    }}
                  >
                    → {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-[#FFCE99]/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p
            className="text-[#FFFDF1]/40 text-center sm:text-left"
            style={{
              fontFamily: "'Poppins', sans-serif",
              fontWeight: 400,
              fontSize: "0.82rem",
            }}
          >
            © {new Date().getFullYear()} Muhammad Shurrab . All rights reserved.
          </p>
          <p
            className="text-[#FFFDF1]/40 flex items-center gap-1.5"
            style={{
              fontFamily: "'Poppins', sans-serif",
              fontWeight: 400,
              fontSize: "0.82rem",
            }}
          >
            Made with{" "}
            <Heart size={13} className="text-[#FF9644] fill-[#FF9644]" />
          </p>
        </div>
      </div>
    </footer>
  );
}
