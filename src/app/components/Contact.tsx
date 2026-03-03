import { useState } from "react";
import {
  Mail,
  MapPin,
  Phone,
  Send,
  Github,
  Linkedin,
  CheckCircle,
  Facebook,
} from "lucide-react";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "bs.muhammadshurrab@gmail.com",
    href: "mailto:bs.muhammadshurrab@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+962 (078) 573-8500",
    href: "tel:+962785738500",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Zarqa, Jordan",
    href: "https://maps.app.goo.gl/34G6mJQT6ADr1GX38",
  },
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

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1500);
  };

  return (
    <section
      id="contact"
      className="py-24 bg-[#562F00] relative overflow-hidden"
    >
      {/* Decorative */}
      <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-[#FF9644]/15 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-56 h-56 rounded-full bg-[#FFCE99]/10 blur-3xl pointer-events-none" />

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
            GET IN TOUCH
          </p>
          <h2
            className="text-[#FFFDF1]"
            style={{
              fontFamily: "'Playfair Display', serif",
              fontWeight: 700,
              fontSize: "clamp(2rem, 4vw, 2.75rem)",
            }}
          >
            Let's Work Together
          </h2>
          <div className="mt-4 mx-auto w-16 h-1 bg-[#FF9644] rounded-full" />
          <p
            className="mt-5 text-[#FFFDF1]/60 max-w-xl mx-auto"
            style={{
              fontFamily: "'Poppins', sans-serif",
              fontWeight: 400,
              fontSize: "0.95rem",
              lineHeight: 1.8,
            }}
          >
            Have a project in mind? I'd love to hear about it. Send me a message
            and let's create something amazing together.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12 items-start">
          {/* Left Info Panel */}
          <div className="lg:col-span-2 flex flex-col gap-8">
            {/* Contact cards */}
            <div className="flex flex-col gap-4">
              {contactInfo.map(({ icon: Icon, label, value, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  className="flex items-center gap-4 p-5 rounded-2xl bg-[#FFFDF1]/5 border border-[#FFCE99]/10 hover:bg-[#FFFDF1]/10 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 rounded-full bg-[#FF9644]/20 flex items-center justify-center shrink-0 group-hover:bg-[#FF9644] transition-colors">
                    <Icon
                      size={20}
                      className="text-[#FF9644] group-hover:text-[#FFFDF1] transition-colors"
                    />
                  </div>
                  <div>
                    <p
                      className="text-[#FFCE99]/70"
                      style={{
                        fontFamily: "'Poppins', sans-serif",
                        fontWeight: 500,
                        fontSize: "0.78rem",
                        letterSpacing: "0.05em",
                      }}
                    >
                      {label.toUpperCase()}
                    </p>
                    <p
                      className="text-[#FFFDF1]"
                      style={{
                        fontFamily: "'Poppins', sans-serif",
                        fontWeight: 500,
                        fontSize: "0.95rem",
                      }}
                    >
                      {value}
                    </p>
                  </div>
                </a>
              ))}
            </div>

            {/* Socials */}
            <div>
              <p
                className="text-[#FFCE99]/70 mb-4"
                style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontWeight: 500,
                  fontSize: "0.85rem",
                }}
              >
                Follow me on:
              </p>
              <div className="flex gap-3">
                {socials.map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    aria-label={label}
                    className="w-11 h-11 rounded-full border border-[#FFCE99]/20 flex items-center justify-center text-[#FFFDF1]/60 hover:bg-[#FF9644] hover:border-[#FF9644] hover:text-[#FFFDF1] transition-all duration-300 hover:-translate-y-1"
                  >
                    <Icon size={17} />
                  </a>
                ))}
              </div>
            </div>

            {/* Availability card */}
            <div className="p-5 rounded-2xl bg-[#FF9644]/15 border border-[#FF9644]/20">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2.5 h-2.5 rounded-full bg-green-400 animate-pulse" />
                <span
                  className="text-[#FF9644]"
                  style={{
                    fontFamily: "'Poppins', sans-serif",
                    fontWeight: 600,
                    fontSize: "0.88rem",
                  }}
                >
                  Currently Available
                </span>
              </div>
              <p
                className="text-[#FFFDF1]/60"
                style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontWeight: 400,
                  fontSize: "0.82rem",
                  lineHeight: 1.7,
                }}
              >
                I'm open to freelance opportunities. Typical response time is
                within 24 hours.
              </p>
            </div>
          </div>

          {/* Right: Form */}
          <div className="lg:col-span-3">
            <div className="bg-[#FFFDF1]/5 border border-[#FFCE99]/10 rounded-3xl p-8">
              {submitted ? (
                <div className="flex flex-col items-center justify-center gap-4 py-12 text-center">
                  <div className="w-20 h-20 rounded-full bg-[#FF9644]/20 flex items-center justify-center">
                    <CheckCircle size={40} className="text-[#FF9644]" />
                  </div>
                  <h3
                    className="text-[#FFFDF1]"
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      fontWeight: 600,
                      fontSize: "1.5rem",
                    }}
                  >
                    Message Sent!
                  </h3>
                  <p
                    className="text-[#FFFDF1]/60 max-w-sm"
                    style={{
                      fontFamily: "'Poppins', sans-serif",
                      fontWeight: 400,
                      fontSize: "0.9rem",
                    }}
                  >
                    Thank you for reaching out. I'll get back to you within 24
                    hours.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: "",
                        email: "",
                        subject: "",
                        message: "",
                      });
                    }}
                    className="mt-2 px-6 py-2.5 rounded-full bg-[#FF9644] text-[#FFFDF1] hover:bg-[#FFCE99] hover:text-[#562F00] transition-colors"
                    style={{
                      fontFamily: "'Poppins', sans-serif",
                      fontWeight: 600,
                      fontSize: "0.9rem",
                    }}
                  >
                    Send Another
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div className="flex flex-col gap-1.5">
                      <label
                        htmlFor="name"
                        className="text-[#FFCE99]/80"
                        style={{
                          fontFamily: "'Poppins', sans-serif",
                          fontWeight: 500,
                          fontSize: "0.85rem",
                        }}
                      >
                        Your Name *
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        className="px-4 py-3 rounded-xl bg-[#FFFDF1]/5 border border-[#FFCE99]/20 text-[#FFFDF1] placeholder-[#FFFDF1]/30 focus:outline-none focus:border-[#FF9644] transition-colors"
                        style={{
                          fontFamily: "'Poppins', sans-serif",
                          fontSize: "0.9rem",
                        }}
                      />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label
                        htmlFor="email"
                        className="text-[#FFCE99]/80"
                        style={{
                          fontFamily: "'Poppins', sans-serif",
                          fontWeight: 500,
                          fontSize: "0.85rem",
                        }}
                      >
                        Email Address *
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        className="px-4 py-3 rounded-xl bg-[#FFFDF1]/5 border border-[#FFCE99]/20 text-[#FFFDF1] placeholder-[#FFFDF1]/30 focus:outline-none focus:border-[#FF9644] transition-colors"
                        style={{
                          fontFamily: "'Poppins', sans-serif",
                          fontSize: "0.9rem",
                        }}
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label
                      htmlFor="subject"
                      className="text-[#FFCE99]/80"
                      style={{
                        fontFamily: "'Poppins', sans-serif",
                        fontWeight: 500,
                        fontSize: "0.85rem",
                      }}
                    >
                      Subject *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      className="px-4 py-3 rounded-xl bg-[#562F00] border border-[#FFCE99]/20 text-[#FFFDF1] focus:outline-none focus:border-[#FF9644] transition-colors appearance-none cursor-pointer"
                      style={{
                        fontFamily: "'Poppins', sans-serif",
                        fontSize: "0.9rem",
                      }}
                    >
                      <option value="" disabled>
                        Select a topic...
                      </option>
                      <option value="web-development">Web Development</option>
                      {/* <option value="mobile-app">Mobile App</option> */}
                      <option value="ui-ux">UI/UX Design</option>
                      <option value="consultation">Consultation</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label
                      htmlFor="message"
                      className="text-[#FFCE99]/80"
                      style={{
                        fontFamily: "'Poppins', sans-serif",
                        fontWeight: 500,
                        fontSize: "0.85rem",
                      }}
                    >
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell me about your project..."
                      className="px-4 py-3 rounded-xl bg-[#FFFDF1]/5 border border-[#FFCE99]/20 text-[#FFFDF1] placeholder-[#FFFDF1]/30 focus:outline-none focus:border-[#FF9644] transition-colors resize-none"
                      style={{
                        fontFamily: "'Poppins', sans-serif",
                        fontSize: "0.9rem",
                      }}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-[#FF9644] text-[#FFFDF1] hover:bg-[#FFCE99] hover:text-[#562F00] transition-all duration-300 disabled:opacity-70 shadow-lg shadow-[#FF9644]/20 hover:-translate-y-0.5"
                    style={{
                      fontFamily: "'Poppins', sans-serif",
                      fontWeight: 600,
                      fontSize: "0.95rem",
                    }}
                  >
                    {loading ? (
                      <>
                        <span className="w-4 h-4 border-2 border-[#FFFDF1] border-t-transparent rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={17} />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
