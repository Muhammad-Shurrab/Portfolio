import { Code2, Coffee, Globe, Heart, MapPin, Mail } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const devImage =
  "https://images.unsplash.com/photo-1753715613434-9c7cb58876b9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXZlbG9wZXIlMjB3b3Jrc3BhY2UlMjBjb2RpbmclMjBkZXNrfGVufDF8fHx8MTc3MjU2NTE1NXww&ixlib=rb-4.1.0&q=80&w=1080";

const funFacts = [
  { icon: Code2, label: "Lines of code written", value: "10K+" },
  { icon: Coffee, label: "Cups of coffee consumed", value: "∞" },
  { icon: Globe, label: "Countries of clients", value: "2+" },
  { icon: Heart, label: "Passion level", value: "100%" },
];

export function About() {
  return (
    <section id="about" className="py-24 bg-[#562F00] relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-[#FF9644]/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full bg-[#FFCE99]/10 blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p
            className="text-[#FF9644] mb-2"
            style={{
              fontFamily: "'Poppins', sans-serif",
              fontWeight: 500,
              fontSize: "0.95rem",
              letterSpacing: "0.1em",
            }}
          >
            GET TO KNOW ME
          </p>
          <h2
            className="text-[#FFFDF1]"
            style={{
              fontFamily: "'Playfair Display', serif",
              fontWeight: 700,
              fontSize: "clamp(2rem, 4vw, 2.75rem)",
            }}
          >
            About Me
          </h2>
          <div className="mt-4 mx-auto w-16 h-1 bg-[#FF9644] rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 gap-14 items-center">
          {/* Image */}
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-full h-full rounded-2xl border-2 border-[#FF9644]/30" />
            <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/5]">
              <ImageWithFallback
                src={devImage}
                alt="Developer at work"
                className="w-full h-full object-cover"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#562F00]/60 to-transparent" />
              {/* Name tag */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-[#FFFDF1]/90 backdrop-blur-sm rounded-xl px-5 py-4">
                  <p
                    className="text-[#562F00]"
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      fontWeight: 700,
                      fontSize: "1.1rem",
                    }}
                  >
                    Muhammad Shurrab
                  </p>
                  <p
                    className="text-[#FF9644]"
                    style={{
                      fontFamily: "'Poppins', sans-serif",
                      fontWeight: 500,
                      fontSize: "0.85rem",
                    }}
                  >
                    Full-Stack Developer
                  </p>
                  <div className="flex items-center gap-1.5 mt-1.5">
                    <MapPin size={13} className="text-[#562F00]/60" />
                    <span
                      className="text-[#562F00]/60"
                      style={{
                        fontFamily: "'Poppins', sans-serif",
                        fontSize: "0.8rem",
                      }}
                    >
                      Zarqa , Jordan
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="flex flex-col gap-6">
            <h3
              className="text-[#FFCE99]"
              style={{
                fontFamily: "'Playfair Display', serif",
                fontWeight: 600,
                fontSize: "1.6rem",
              }}
            >
              Building Digital Products That Make a Difference
            </h3>

            <p
              className="text-[#FFFDF1]/75"
              style={{
                fontFamily: "'Poppins', sans-serif",
                fontWeight: 400,
                fontSize: "0.95rem",
                lineHeight: 1.9,
              }}
            >
              I'm a passionate Full-Stack Developer with 2+ years of experience
              building scalable web applications. I specialize in React,
              Node.js, and modern cloud architecture, bringing ideas to life
              with clean, maintainable code.
            </p>

            <p
              className="text-[#FFFDF1]/75"
              style={{
                fontFamily: "'Poppins', sans-serif",
                fontWeight: 400,
                fontSize: "0.95rem",
                lineHeight: 1.9,
              }}
            >
              I've worked with startups and businesses across different
              industries to deliver solutions that are not just functional, but
              also beautiful and user-friendly. My goal is to help clients grow
              their business through technology.
            </p>

            {/* Info grid */}
            <div className="grid grid-cols-2 gap-6 mt-2">
              {[
                { label: "Name", value: "Muhammad Shurrab" },
                { label: "Experience", value: "2+ Years" },
                { label: "Email", value: "bs.muhammadshurrab@gmail.com" },
                // { label: "Availability", value: "Freelance" },
              ].map((item) => (
                <div key={item.label} className="flex flex-col gap-0.5">
                  <span
                    className="text-[#FF9644]"
                    style={{
                      fontFamily: "'Poppins', sans-serif",
                      fontWeight: 600,
                      fontSize: "0.8rem",
                      letterSpacing: "0.05em",
                    }}
                  >
                    {item.label.toUpperCase()}
                  </span>
                  <span
                    className="text-[#FFFDF1]"
                    style={{
                      fontFamily: "'Poppins', sans-serif",
                      fontWeight: 400,
                      fontSize: "0.95rem",
                    }}
                  >
                    {item.value}
                  </span>
                </div>
              ))}
            </div>

            {/* Contact Button */}
            <a
              href="mailto:bs.muhammadshurrab@gmail.com"
              className="mt-2 w-fit flex items-center gap-2 px-6 py-3 rounded-full bg-[#FF9644] text-[#FFFDF1] hover:bg-[#FFCE99] hover:text-[#562F00] transition-all duration-300 shadow-lg shadow-[#FF9644]/20"
              style={{
                fontFamily: "'Poppins', sans-serif",
                fontWeight: 600,
                fontSize: "0.9rem",
              }}
            >
              <Mail size={16} />
              Get In Touch
            </a>
          </div>
        </div>

        {/* Fun Facts */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6">
          {funFacts.map(({ icon: Icon, label, value }) => (
            <div
              key={label}
              className="flex flex-col items-center gap-3 p-6 rounded-2xl bg-[#FFFDF1]/5 border border-[#FFCE99]/10 hover:bg-[#FFFDF1]/10 transition-colors duration-300 text-center"
            >
              <div className="w-12 h-12 rounded-full bg-[#FF9644]/20 flex items-center justify-center">
                <Icon size={22} className="text-[#FF9644]" />
              </div>
              <p
                className="text-[#FFCE99]"
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontWeight: 700,
                  fontSize: "1.6rem",
                }}
              >
                {value}
              </p>
              <p
                className="text-[#FFFDF1]/50"
                style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontWeight: 400,
                  fontSize: "0.8rem",
                }}
              >
                {label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
