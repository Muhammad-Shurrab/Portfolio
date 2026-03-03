import { ArrowDown, Github, Linkedin, Download, Facebook } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const heroImage =
  "https://lh3.googleusercontent.com/pw/AP1GczM1xrfqZjxEhke9laA8YXdlpqoCT-aWrwTB_5aJZwyzXdjErxr9My-hWyQ03eGvSUTZkjijaF7lm8PLyYcTwlW0qKb7gHu7r_8qHoJF8IlDQ7CR3FUvCBg8FwcpwzSCESTDdXv4OSP0V7JsJRpuZCoSlw=w512-h917-s-no-gm?authuser=0";

const socialLinks = [
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

export function Hero() {
  const scrollToProjects = () => {
    const el = document.getElementById("projects");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToContact = () => {
    const el = document.getElementById("contact");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="min-h-screen bg-[#FFFDF1] relative overflow-hidden flex items-center"
    >
      {/* Decorative blobs */}
      <div className="absolute top-20 right-0 w-72 h-72 rounded-full bg-[#FFCE99]/40 blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 left-0 w-56 h-56 rounded-full bg-[#FF9644]/20 blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-1/3 w-40 h-40 rounded-full bg-[#FFCE99]/30 blur-2xl pointer-events-none" />

      {/* Grid dots background */}
      <div
        className="absolute inset-0 pointer-events-none opacity-30"
        style={{
          backgroundImage:
            "radial-gradient(circle, #562F00 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative max-w-6xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-12 items-center w-full">
        {/* Text Content */}
        <div className="flex flex-col gap-6 order-2 md:order-1">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 w-fit px-4 py-1.5 rounded-full bg-[#FFCE99]/60 border border-[#FF9644]/40">
            <span className="w-2 h-2 rounded-full bg-[#FF9644] animate-pulse" />
            <span
              className="text-[#562F00]"
              style={{
                fontFamily: "'Poppins', sans-serif",
                fontWeight: 500,
                fontSize: "0.85rem",
              }}
            >
              Available for freelance work
            </span>
          </div>

          {/* Name */}
          <div>
            <p
              className="text-[#FF9644] mb-1"
              style={{
                fontFamily: "'Poppins', sans-serif",
                fontWeight: 500,
                fontSize: "1.1rem",
              }}
            >
              Hello, I'm
            </p>
            <h1
              className="text-[#562F00]"
              style={{
                fontFamily: "'Playfair Display', serif",
                fontWeight: 800,
                fontSize: "clamp(2.5rem, 5vw, 4rem)",
                lineHeight: 1.1,
              }}
            >
              Muhammad Shurrab
            </h1>
            <h2
              className="mt-2"
              style={{
                fontFamily: "'Poppins', sans-serif",
                fontWeight: 600,
                fontSize: "clamp(1.2rem, 2.5vw, 1.75rem)",
                color: "#562F00",
                opacity: 0.75,
              }}
            >
              Full-Stack Developer
            </h2>
          </div>

          {/* Description */}
          <p
            className="text-[#562F00]/70 max-w-md"
            style={{
              fontFamily: "'Poppins', sans-serif",
              fontWeight: 400,
              fontSize: "1rem",
              lineHeight: 1.8,
            }}
          >
            I craft beautiful, high-performance web applications using modern
            technologies. Passionate about turning ideas into elegant digital
            experiences.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 mt-2">
            <button
              onClick={scrollToProjects}
              className="px-7 py-3 rounded-full bg-[#FF9644] text-[#FFFDF1] hover:bg-[#562F00] transition-all duration-300 shadow-lg shadow-[#FF9644]/30 hover:shadow-[#562F00]/20 hover:-translate-y-0.5"
              style={{
                fontFamily: "'Poppins', sans-serif",
                fontWeight: 600,
                fontSize: "0.95rem",
              }}
            >
              View My Work
            </button>
            <button
              onClick={scrollToContact}
              className="px-7 py-3 rounded-full border-2 border-[#562F00] text-[#562F00] hover:bg-[#562F00] hover:text-[#FFFDF1] transition-all duration-300 hover:-translate-y-0.5"
              style={{
                fontFamily: "'Poppins', sans-serif",
                fontWeight: 600,
                fontSize: "0.95rem",
              }}
            >
              Let's Talk
            </button>
          </div>

          {/* Stats */}
          <div className="flex gap-8 mt-4 pt-4 border-t border-[#FFCE99]">
            {[
              { value: "5+", label: "Projects" },
              { value: "5+", label: "Clients" },
              { value: "2+", label: "Years Exp." },
            ].map((stat) => (
              <div key={stat.label}>
                <p
                  className="text-[#FF9644]"
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontWeight: 700,
                    fontSize: "1.8rem",
                  }}
                >
                  {stat.value}
                </p>
                <p
                  className="text-[#562F00]/60"
                  style={{
                    fontFamily: "'Poppins', sans-serif",
                    fontWeight: 400,
                    fontSize: "0.85rem",
                  }}
                >
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Image + Social */}
        <div className="relative flex flex-col items-center order-1 md:order-2">
          {/* Image Container */}
          <div className="relative">
            {/* Orange ring */}
            <div className="absolute -inset-3 rounded-full border-2 border-dashed border-[#FF9644]/50 animate-[spin_20s_linear_infinite]" />
            {/* Background blob */}
            <div className="absolute inset-0 rounded-full bg-[#FFCE99]/50 blur-2xl scale-110" />
            {/* Photo */}
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-[#FF9644] shadow-2xl shadow-[#FF9644]/30">
              <ImageWithFallback
                src={heroImage}
                alt="Profile Photo"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Floating badge - experience */}
            <div className="absolute -bottom-4 -left-4 bg-[#FFFDF1] border border-[#FFCE99] rounded-2xl px-4 py-2 shadow-lg">
              <p
                className="text-[#562F00]"
                style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontWeight: 600,
                  fontSize: "0.8rem",
                }}
              >
                ✨ Open to work
              </p>
            </div>

            {/* Floating badge - tech */}
            <div className="absolute -top-4 -right-4 bg-[#FF9644] rounded-2xl px-4 py-2 shadow-lg">
              <p
                className="text-[#FFFDF1]"
                style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontWeight: 600,
                  fontSize: "0.8rem",
                }}
              >
                Mern Stack
              </p>
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex gap-4 mt-12">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="w-11 h-11 rounded-full border-2 border-[#562F00]/20 flex items-center justify-center text-[#562F00] hover:bg-[#FF9644] hover:border-[#FF9644] hover:text-[#FFFDF1] transition-all duration-300 hover:-translate-y-1"
              >
                <Icon size={18} />
              </a>
            ))}
            <a
              href="https://docs.google.com/document/d/1phz-7dw7ZcO4kJVkKWK8Jyj8jGGfhvHEBeQqIRgXYfM/edit?usp=sharing"
              className="flex items-center gap-2 px-4 h-11 rounded-full border-2 border-[#562F00]/20 text-[#562F00] hover:bg-[#562F00] hover:border-[#562F00] hover:text-[#FFFDF1] transition-all duration-300 hover:-translate-y-1"
              style={{
                fontFamily: "'Poppins', sans-serif",
                fontWeight: 500,
                fontSize: "0.85rem",
              }}
            >
              <Download size={16} />
              Resume
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span
          className="text-[#562F00]/50"
          style={{ fontFamily: "'Poppins', sans-serif", fontSize: "0.75rem" }}
        >
          Scroll down
        </span>
        <ArrowDown size={16} className="text-[#FF9644]" />
      </div>
    </section>
  );
}
